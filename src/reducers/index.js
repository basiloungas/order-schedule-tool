import {combineReducers} from 'redux';

import drivers from './drivers';
import schedule from './schedule';
import shoppers from './shoppers';
import stores from './stores';
import user from './user';

export default combineReducers({
  drivers,
  schedule,
  shoppers,
  stores,
  user,
});
