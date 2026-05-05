import axios from 'axios';

const firebaseUrl = process.env.REACT_APP_FIREBASE_URL;
if (!firebaseUrl) {
    throw new Error('REACT_APP_FIREBASE_URL environment variable is not set. Check your .env file.');
}

const instance = axios.create({
    baseURL: firebaseUrl
});

export default instance;
