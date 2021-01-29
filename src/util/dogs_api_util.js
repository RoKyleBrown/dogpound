import $ from 'jquery';

export const fetchDogs = () => {
    return $.ajax({
        url: `https://dog.ceo/api/breed/pug/images/random/10`,
        error: (err) => console.log(err)
    })
}