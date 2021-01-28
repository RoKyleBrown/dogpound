import * as DogsApiUtil from '../util/dogs_api_util';

export const RECIEVE_NINE_DOGS = `RECEIVE_NINE_DOGS`;

const receiveDogs = dogs => {
    return {
        type: RECIEVE_NINE_DOGS,
        dogs
    }
}

export const fetchDogs = () => dispatch => {
    return DogsApiUtil.fetchDogs()
        .then( dogs => dispatch(receiveDogs(dogs)))
}