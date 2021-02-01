export const email = (image) => {

    let subject = "Cool Dog";
    let body = `Check out this cool dog! --> ${image}`;

    window.location.href = "mailto:" + '?' + '&subject=' + subject + 
    '&body=' + body;
}