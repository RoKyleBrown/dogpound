import $ from 'jquery';

export const shareMenu = (id) => {
    $(`.menu${id}`).addClass('share-menu-b');
} 

export const shareMenuClosed = () => {
    $(`.share-menu-b`).removeClass('share-menu-b');
}


export const email = (image) => {

    let subject = "Cool Dog";
    let body = `Check out this cool dog! --> ${image}`;

    window.location.href = "mailto:" + '?' + '&subject=' + subject + 
    '&body=' + body;
}