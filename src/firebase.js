import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_apiKey,
  authDomain: process.env.REACT_APP_FB_authDomain,
  databaseURL: process.env.REACT_APP_FB_databaseURL,
  projectId: process.env.REACT_APP_FB_projectId,
  storageBucket: process.env.REACT_APP_FB_storageBucket,
  messagingSenderId: process.env.REACT_APP_FB_messagingSenderId,
  appId: process.env.REACT_APP_FB_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
