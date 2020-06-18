export const initErrorReporting = () => {
  global.bugsnagClient = {
    notify: () => {},
  };
};

export const log = (error, errorInfo = {}) => {};
