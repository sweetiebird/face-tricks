import { createSelector } from 'reselect';

import { name } from './reducer';


const getState = state => state[name];


export const getUid = createSelector(
  [getState],
  state => state.uid,
);

export const getIsAuthenticated = createSelector(
  [getState],
  state => state.isAuthenticated,
);

export const getIsFetching = createSelector(
  [getState],
  state => state.isFetching,
);
