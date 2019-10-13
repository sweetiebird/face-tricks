import React from 'react';
import bugsnag from '@bugsnag/expo';
import { Provider } from 'react-redux';

import getEnv from 'config/environment';
import createStore from 'store';

import AppMain from './AppMain';


const env = getEnv();

const store = createStore();

global.bugsnagClient = bugsnag(env.bugsnag.key);

const App = ({ skipLoadingScreen }) => (
  <Provider store={store}>
    <AppMain skipLoadingScreen={skipLoadingScreen} />
  </Provider>
);


export default App;
