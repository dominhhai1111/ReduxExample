import { combineReducers } from 'redux';
import counter from './countReducer';

const countApp = combineReducers({count: counter});

export default countApp;