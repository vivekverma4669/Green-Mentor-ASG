import { legacy_createStore } from 'redux';
import { combineReducers } from 'redux';
import {authReducer} from './AuthReducer/reducer'
import {taskReducer} from './TaskReducer/reducer'

 const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer
});
export const store = legacy_createStore(rootReducer);

