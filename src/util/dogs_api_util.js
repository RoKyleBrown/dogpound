import $ from 'jquery';

export const fetchDogs = () => {
    return $.ajax({
        url: `https://dog.ceo/api/breed/pug/images/random/9`,
        error: (err) => console.log(err)
    })
}