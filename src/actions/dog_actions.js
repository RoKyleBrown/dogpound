import * as DogsApiUtil from '../util/dogs_api_util';

export const RECIEVE_TEN_DOGS = `RECEIVE_TEN_DOGS`;

const receiveDogs = dogs => {
    return {
        type: RECIEVE_TEN_DOGS,
        dogs
    }
}

export const fetchDogs = () => dispatch => {
    return DogsApiUtil.fetchDogs()
        .then( dogs => dispatch(receiveDogs(dogs)))
}