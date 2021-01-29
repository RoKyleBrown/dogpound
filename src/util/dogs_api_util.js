import $ from 'jquery';

export const fetchTenDogs = () => {
    return $.ajax({
        url: `https://dog.ceo/api/breed/pug/images/random/10`,
        error: (err) => console.log(err)
    })
}

export const fetchAllDogs = () => {
    return $.ajax({
        url: `https://dog.ceo/api/breed/pug/images`,
        error: (err) => console.log(err)
    })
}