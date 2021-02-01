import React from 'react';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import '../styling/dogs_index.css'
import BreedsDropdownContainer from "./breeds_dropdown_container";
import { deselectHouse, highlightHouse } from './exported_functions/nav_bar';
import { email } from './exported_functions/email';

let dogPics = {};


const DogsIndex = (props) => {

    const [scrollBottom, setScrollBottom] = useState(0);

    useEffect(() => {
        highlightHouse();
    }, []);

    useEffect(() => {
        props.fetchSomeDogs();
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

    const menu = () => {

        return (
            <div className="feather">
                <div className="filter-dropdown-a" >
                            <BreedsDropdownContainer history={props.history} />
                </div>
            </div>
        )
    }

    window.addEventListener("scroll", () => {
        if ($(window).scrollTop() + $(window).height() === $(document).height()){
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
                <div className="filter-dropdown-contain">
                    <div className="dropdown-container">
                            {menu()}
                    </div>
                </div>
            {Object.values(dogPics).map( (dog, i) =>
                
                
                    <div id="center-dog" key={i}>
                        <img className={`dog${i} doggie`} 
                        src={dog[1]} key={i} alt={dog[0]} />
                        <div id="module">
                            <div className="burger-contain">
                                <div >
                                <img src="https://dogpound.s3-us-west-1.amazonaws.com/menu_icon.png"
                                        onClick={() => {
                                            email(dog[1]);
                                        }}
                                        alt="picture menu" width="25px"/>
                                </div>
                            </div>
                                <div className="caption-contain">
                                    <div id="caption-box">
                                        <h3 onClick={() => {
                                                props.history.push(`/breeds/${dog[0]}`)
                                                deselectHouse();
                                                window.location.reload();
                                            }}>{`#${dog[0]}`}
                                        </h3>
                                    </div>
                                </div>
                        </div>
                    </div>
                
                )}
        </div>
    )
    
}

export default DogsIndex;