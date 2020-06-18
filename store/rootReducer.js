import { combineReducers } from 'redux';

import { reducer as create } from 'modules/create';
import { reducer as user } from 'modules/user';


const appReducer = combineReducers({
  [create.name]: create.reducer,
  [user.name]: user.reducer,
});


export default appReducer;
