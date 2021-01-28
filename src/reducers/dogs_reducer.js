import {
    RECIEVE_NINE_DOGS
} from '../actions/dog_actions';

const DogsReducer = (oldState, action) => {
    Object.freeze(oldState);
    oldState = Object.assign({}, oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECIEVE_NINE_DOGS:
            return action.dogs;
    
        default:
            return oldState;
    }
}

export default DogsReducer;