import bugsnag from '@bugsnag/expo';

import React from 'react';
import { Provider } from 'react-redux';

import createStore from 'store';

import AppMain from './AppMain';

import settings from './app.json';


const store = createStore();

global.bugsnagClient = bugsnag(settings.expo.extra.bugsnag.apiKey);

const App = ({ skipLoadingScreen }) => (
  <Provider store={store}>
    <AppMain skipLoadingScreen={skipLoadingScreen} />
  </Provider>
);


export default App;
