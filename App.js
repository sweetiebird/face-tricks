import 'config/dev';
import React from 'react';
import bugsnag from '@bugsnag/expo';
import { Provider } from 'react-redux';

import getEnv from 'config/environment';
import createStore from 'store';

import AppMain from './AppMain';

import { ErrorBoundary } from 'modules/error/components';


const env = getEnv();

const store = createStore();

global.bugsnagClient = bugsnag(env.bugsnag.key);

const App = ({ skipLoadingScreen }) => (
  <ErrorBoundary>
    <Provider store={store}>
      <AppMain skipLoadingScreen={skipLoadingScreen} />
    </Provider>
  </ErrorBoundary>
);


export default App;
