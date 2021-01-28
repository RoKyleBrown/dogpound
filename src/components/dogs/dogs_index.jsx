import React from 'react';
import { fetchDogs } from '../../actions/dog_actions';
import { useEffect, useState } from 'react';
import { connectAdvanced } from 'react-redux';
import $ from 'jquery';

let dogPics = [];

const DogsIndex = (props) => {
    let bottomFlag = false;
    const [scrollBottom, setScrollBottom] = useState(false);
    


    useEffect(() => {
        props.fetchDogs();
        loadPage();
    }, [scrollBottom]);

    const loadPage = () => {
        debugger;
        if (props.dogs !== undefined){
            props.dogs.forEach( (dog) =>{
                dogPics.push(dog);
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
    
    if (dogPics === []) {
        return null;
    } else {
        return(
        <div>
            {dogPics.map( (dog, i) =>
                
                <img className={`dog${i}`} src={dog} key={i} alt=""/>
                
                )}
        </div>
    )}
    
}

export default DogsIndex;