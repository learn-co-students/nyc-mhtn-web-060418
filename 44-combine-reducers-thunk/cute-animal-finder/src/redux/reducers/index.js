import { combineReducers } from 'redux';
import userReducer from './userReducer';
import meatReducer from './meatReducer';

export default combineReducers({
  user: userReducer,
  meat: meatReducer
})
// combineReducers just combines a bunch of reducers
