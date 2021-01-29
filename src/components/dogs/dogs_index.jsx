import React from 'react';
import { fetchDogs } from '../../actions/dog_actions';
import { useEffect, useState } from 'react';
import { connectAdvanced } from 'react-redux';
import $ from 'jquery';
import '../styling/dogs_index.css'

let dogPics = {};

const DogsIndex = (props) => {

    const [scrollBottom, setScrollBottom] = useState(0);
    


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
            if (scrollBottom === 0){
                setScrollBottom(1);
            } else {
                setScrollBottom(0);
            }
           
        }
    });

    loadPage();
    
        return(
        <div className="gallery">
            {Object.values(dogPics).map( (dog, i) =>
                
                <div id="center-dog">
                    <img className={`dog${i} doggie`} src={dog[1]} key={i} alt={dog[0]}/>
                </div>
                
                )}
        </div>
    )
    
}

export default DogsIndex;