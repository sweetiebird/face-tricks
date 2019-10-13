import { createSelector } from 'reselect';

import { name } from './reducer';


const getState = state => state[name];


export const getIsFetching = createSelector(
  [getState],
  state => state.isFetching,
);

export const getResultId = createSelector(
  [getState],
  state => state.resultId,
);

export const getResult = createSelector(
  [getState],
  state => state.result,
);
