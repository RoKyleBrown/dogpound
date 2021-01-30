import * as DogsApiUtil from '../util/dogs_api_util';

export const RECIEVE_SOME_DOGS = `RECEIVE_TEN_DOGS`;
export const RECIEVE_ALL_DOGS = `RECEIVE_ALL_DOGS`;

const receiveTenDogs = dogs => {
    return {
        type: RECIEVE_SOME_DOGS,
        dogs
    }
}
const receiveAllDogs = allDogs => {
   
    return {
        type: RECIEVE_ALL_DOGS,
        allDogs
    }
}


export const fetchSomeDogs = () => dispatch => {
    return DogsApiUtil.fetchSomeDogs()
        .then( dogs => dispatch(receiveTenDogs(dogs)))
}

export const fetchAllDogs = () => dispatch => {
    return DogsApiUtil.fetchAllDogs()
        .then( allDogs => dispatch(receiveAllDogs(allDogs)))
}