import { combineReducers } from 'redux';
import todosReducer from './todos.js';

const rootReducer = combineReducers({
	todos: todosReducer
});

export default rootReducer;
