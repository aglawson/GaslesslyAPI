import got from 'got';
import crypto from 'crypto';
import OAuth from 'oauth-1.0a';
import qs from 'querystring';
import * as rl from 'readline';

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

// The code below sets the consumer key and consumer secret from your environment variables
// To set environment variables on macOS or Linux, run the export commands below from the terminal:
// export CONSUMER_KEY='YOUR-KEY'
// export CONSUMER_SECRET='YOUR-SECRET'
const consumer_key = process.env.TWITTER_API_KEY
const consumer_secret = process.env.TWITTER_API_KEY_SECRET

// These are the parameters for the API request
// specify Tweet IDs to fetch, and any additional fields that are required
// by default, only the Tweet ID and text are returned
const params = 'user.fields=created_at,description&expansions=pinned_tweet_id' // Edit optional query parameters here

const endpointURL = `https://api.twitter.com/2/users/me?${params}`;

// this example uses PIN-based OAuth to authorize the user
const requestTokenURL = 'https://api.twitter.com/oauth/request_token?oauth_callback=oob&x_auth_access_type=read';
const authorizeURL = new URL('https://api.twitter.com/oauth/authorize');
const accessTokenURL = 'https://api.twitter.com/oauth/access_token';

const oauth = OAuth({
  consumer: {
    key: consumer_key,
    secret: consumer_secret
  },
  signature_method: 'HMAC-SHA1',
  hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
});

async function input(prompt) {
  return new Promise(async (resolve, reject) => {
    readline.question(prompt, (out) => {
      readline.close();
      resolve(out);
    });
  });
}

async function requestToken() {

  const authHeader = oauth.toHeader(oauth.authorize({
    url: requestTokenURL,
    method: 'POST'
  }));

  const req = await got.post(requestTokenURL, {
    headers: {
      Authorization: authHeader["Authorization"]
    }
  });

  if (req.body) {
    return qs.parse(req.body);
  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}

async function accessToken(
  enc_token, 
  verifier) {

  const oauth_token = enc_token//DecryptData(enc_token)
  console.log(oauth_token)

  const authHeader = oauth.toHeader(oauth.authorize({
    url: accessTokenURL,
    method: 'POST'
  }));
  console.log('in accessToken', oauth_token, verifier)
  const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${verifier}&oauth_token=${oauth_token}`

  const req = await got.post(path, {
    headers: {
      Authorization: authHeader["Authorization"]
    }
  });

  if (req.body) {
    console.log('accessToken success')
    return qs.parse(req.body);
  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}

async function getRequest(
  oauth_token,
  oauth_token_secret
) {

  oauth_token = oauth_token//DecryptData(oauth_token)
  oauth_token_secret = oauth_token_secret//DecryptData(oauth_token_secret)

  const token = {
    key: oauth_token,
    secret: oauth_token_secret
  };
//   console.log(token)

  const authHeader = oauth.toHeader(oauth.authorize({
    url: endpointURL,
    method: 'GET'
  }, token));

  const req = await got(endpointURL, {
    headers: {
      Authorization: authHeader["Authorization"],
      'user-agent': "v2UserLookupJS"
    }
  });

  if (req.body) {
    return JSON.parse(req.body);
  } else {
    throw new Error('Unsuccessful request');
  }
}

export const getAuthUrl = async () => {
    // Get request token
    const oAuthRequestToken = await requestToken();

    // Get authorization
    authorizeURL.searchParams.delete('oauth_token')
    authorizeURL.searchParams.append('oauth_token', oAuthRequestToken.oauth_token);

    return { authUrl: authorizeURL.href, requestToken: oAuthRequestToken}
}

export const getAccessToken = async (req) => {
    const pin = req.query.pin
    const oAuthRequestToken = req.query.requestToken
    // console.log(oAuthRequestToken)
    // console.log(pin)
    try{
    const oAuthAccessToken = await accessToken(oAuthRequestToken, pin.trim());
    return oAuthAccessToken
    } catch(error) {
        console.log(error)
        throw(error)
    }
}

export const TwitterLookup = async (req) => {
  try {
    const oAuthAccessToken = req.query.oauth_token
    const oAuthTokenSecret = req.query.oauth_token_secret

    const dec_token = oAuthAccessToken//DecryptData(oAuthAccessToken)
    const dec_secret = oAuthTokenSecret//DecryptData(oAuthTokenSecret)
    // Make the request
    const response = await getRequest(dec_token, dec_secret);
    console.log(response)
    return response
  } catch (e) {
    console.log(e);
  }
}