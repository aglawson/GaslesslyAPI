import { initializeApp } from "firebase/app"
import dotenv from 'dotenv'
dotenv.config();

export const InitializeFirebase = async() => {
    const firebaseConfig = {
        apiKey: process.env.fb_key,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId
    }
    
    const app = initializeApp(firebaseConfig)

    return app;
}

