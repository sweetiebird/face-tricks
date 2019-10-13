import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import getEnv from 'config/environment';

import Auth from './auth';
// import Database from './database';
// import Storage from './storage';


const env = getEnv();

const config = {
  apiKey: env.firebase.apiKey,
  appId: env.firebase.appId,
  authDomain: env.firebase.authDomain,
  databaseURL: env.firebase.dbUrl,
  measurementId: env.firebase.measureId,
  messagingSenderId: env.firebase.msgSenderId,
  projectId: env.firebase.projectId,
  storageBucket: env.firebase.storageBucket,
};

firebase.initializeApp(config);

Auth.init(firebase);
// Database.init(firebase);
// Storage.init(firebase);


export {
  Auth,
  // Database,
  // Storage
};
