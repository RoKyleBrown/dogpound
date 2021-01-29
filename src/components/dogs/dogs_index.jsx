import React from 'react';
import { fetchDogs } from '../../actions/dog_actions';
import { useEffect, useState } from 'react';
import { connectAdvanced } from 'react-redux';
import $ from 'jquery';

let dogPics = {};

const DogsIndex = (props) => {

    const [scrollBottom, setScrollBottom] = useState(false);
    


    useEffect(() => {
        props.fetchDogs();
        loadPage();
    }, [scrollBottom]);

    const loadPage = () => {

        if (props.dogs !== undefined){
            props.dogs.forEach( (dog) =>{
                let dogUrl = dog.split("\/");
                let dogFile = dogUrl[dogUrl.length-1];
                let breed = dogUrl[dogUrl.length-2];
                if (!dogPics[dogFile]) dogPics[dogFile] = [breed, dog];
            })
        }
    };

    window.addEventListener("scroll", () => {
        if ($(window).scrollTop() + $(window).height() == $(document).height()){
            if (scrollBottom){
                setScrollBottom(false);
            } else {
                setScrollBottom(true);
            }
           
        }
    });

    loadPage();
    debugger;
    if (dogPics === []) {
        return null;
    } else {
        return(
        <div>
            {Object.values(dogPics).map( (dog, i) =>
                
                <img className={`dog${i}`} src={dog[1]} key={i} alt=""/>
                
                )}
        </div>
    )}
    
}

export default DogsIndex;