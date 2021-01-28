import { combineReducers } from 'redux';
import DogsReducer from './dogs_reducer';

const RootReducer = combineReducers({
    dogs: DogsReducer
});

export default RootReducer;