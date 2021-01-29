import { combineReducers } from 'redux';
import SomeDogsReducer from './some_dogs_reducer';
import AllDogsReducer from './all_dogs_reducer';

const RootReducer = combineReducers({
    dogs: SomeDogsReducer,
    allDogs: AllDogsReducer
});

export default RootReducer;