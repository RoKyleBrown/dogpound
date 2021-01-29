import {
    RECIEVE_ALL_DOGS
} from '../actions/dog_actions';

const AllDogsReducer = (oldState, action) => {

    Object.freeze(oldState);
    oldState = Object.assign({}, oldState);

    switch (action.type) {
        case RECIEVE_ALL_DOGS:
            return action.allDogs;

        default:
            return oldState;
    }
}

export default AllDogsReducer;