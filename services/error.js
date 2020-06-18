import bugsnag from '@bugsnag/expo';
import getEnv from 'config/environment';

import { Auth } from './firebase';


const env = getEnv();

export const initErrorReporting = () => {
  global.bugsnagClient = bugsnag.start(env.bugsnag.key);
};

export const log = (error, errorInfo = {}) => {
  global.bugsnagClient.notify(error, {
    metaData: {
      errorInfo,
      user: Auth.user,
    },
  });
};
