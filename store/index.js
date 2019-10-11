import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';
import rootSagas from './rootSagas';


const storeAccessor = {
  getState: undefined,
  dispatch: undefined,
};

const configureStore = (hydrate = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    hydrate,
    compose(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSagas);

  storeAccessor.dispatch = store.dispatch;
  storeAccessor.getState = () => {
    const state = store.getState();
    return Object.freeze(state);
  };

  return store;
};


export { storeAccessor };
export default configureStore;
