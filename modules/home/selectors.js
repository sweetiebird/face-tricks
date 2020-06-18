import { createSelector } from 'reselect';

import { name } from './reducer';


const getState = state => state[name];
