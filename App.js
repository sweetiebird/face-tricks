import 'config/dev';
import React from 'react';
import { Provider } from 'react-redux';

import { Error } from 'services';

import createStore from 'store';

import AppMain from './AppMain';

import { ErrorBoundary } from 'modules/error/components';


const store = createStore();

Error.initErrorReporting();

const App = ({ skipLoadingScreen }) => (
  <ErrorBoundary>
    <Provider store={store}>
      <AppMain skipLoadingScreen={skipLoadingScreen} />
    </Provider>
  </ErrorBoundary>
);


export default App;
