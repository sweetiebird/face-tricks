import { Auth } from './firebase';


export const log = (error, errorInfo = {}) => {
  global.bugsnagClient.notify(error, {
    metaData: {
      errorInfo,
      user: Auth.user,
    },
  });
};
