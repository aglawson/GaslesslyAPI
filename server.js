import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// const passport = require('passport');
import path from 'path';
import  fs from 'fs';
const router = express.Router();
const app = express();
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 5050;

/**
 * Middleware
 */
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.json());

// /**
//  * JWT Auth
//  */
// app.use(passport.initialize());
// require('./auth/passport')(passport);

/**
 * Routes
 */
import {router as functions} from './index.js';
app.use('/', functions);

// Online check
app.use(
  '/',
  router.get('/', (req, res) => {
    try {
      res.json({ res: 'success' });
    } catch (err) {
      res.json({ res: err });
    }
  })
);

//Change to server.listen(...) for https
app.listen(port, '0.0.0.0', err => {
  if (err) throw err;
  console.log(`Server is running on port: ${port}`);
});

const exitHandler = (exitCode, options) => {
  console.log('Shutting down');

  process.exit();
};

process.on('exit', exitHandler.bind(null, { exit: true }));
process.on('SIGINT', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));