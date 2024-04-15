import { legacy_createStore , applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import {thunk }from 'redux-thunk';
import authReducer from './AuthReducer/reducer';
import taskReducer from './TaskReducer/reducer';
const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

