import {
    RECIEVE_TEN_DOGS
} from '../actions/dog_actions';

const DogsReducer = (oldState, action) => {
    Object.freeze(oldState);
    oldState = Object.assign({}, oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECIEVE_TEN_DOGS:
            return action.dogs;
    
        default:
            return oldState;
    }
}

export default DogsReducer;