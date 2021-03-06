import $ from 'jquery';

export const fetchSomeDogs = () => {
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
export const fetchByBread = (breed) => {
    return $.ajax({
        url: `https://dog.ceo/api/breed/${breed}/images`,
        error: (err) => console.log(err)
    })
}

//fetch by breed