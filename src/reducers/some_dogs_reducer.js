import {
    RECIEVE_SOME_DOGS
} from '../actions/dog_actions';

const SomeDogsReducer = (oldState, action) => {
    
    Object.freeze(oldState);
    oldState = Object.assign({}, oldState);

    switch (action.type) {
        case RECIEVE_SOME_DOGS:
            return action.dogs;
    
        default:
            return oldState;
    }
}

export default SomeDogsReducer;