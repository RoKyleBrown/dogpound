import React from "react";
import { useEffect, useState } from 'react';
import $ from 'jquery';
import '../styling/dogs_index.css';
import BreedsDropdownContainer from "./breeds_dropdown_container";

let dogPics = {};
let allPics = {};

const FilterPage = (props) => {
    const [scrollBottom, setScrollBottom] = useState(0);

    useEffect(() => {
        props.fetchAllDogs();
    }, [])

    useEffect(() => {
        props.fetchSomeDogs();
        loadPage();
    }, [scrollBottom]);


    const loadAllDogs = () => {
        if (props.allDogs !== undefined) {
            props.allDogs.forEach((dog) => {
                let dogUrl = dog.split("\/");
                let dogFile = dogUrl[dogUrl.length - 1];
                let breed = dogUrl[dogUrl.length - 2];
                let matchBreed = props.match.params["breed"];
                
                if (breed === matchBreed) {
                    if (!allPics[dogFile]) {
                        allPics[dogFile] = [breed, dog];
                    }
                }
                
            })
        }
    }

    const loadPage = () => {
        let picLoaded = false;
        if (props.dogs !== undefined) {
            props.dogs.forEach((dog) => {
                let dogUrl = dog.split("\/");
                let dogFile = dogUrl[dogUrl.length - 1];
                let breed = dogUrl[dogUrl.length - 2];
                let matchBreed = props.match.params["breed"];
                
                if (breed === matchBreed) {
                    if (!dogPics[dogFile]) {
                        dogPics[dogFile] = [breed, dog];
                        picLoaded = true;
                    }
                }
                
            })
            
            let loadedPics = Object.values(dogPics);
            let totalPics = Object.values(allPics);
            if (loadedPics.length <= 1) props.fetchSomeDogs();
            if (!picLoaded && (loadedPics.length !== totalPics.length)) {
                props.fetchSomeDogs();
            } 
        }
    };

    window.addEventListener("scroll", () => {
        
        if ($(window).scrollTop() + $(window).height() === $(document).height()) {
            if (scrollBottom === 0) {
                setScrollBottom(1);
            } else {
                setScrollBottom(0);
            }

        }
    });

    loadAllDogs();
    loadPage();

    return (
        <div className="gallery">
            <div className="filter-dropdown-contain">
                <div className="dropdown-container">
                    <div className="filter-dropdown-a">
                        <BreedsDropdownContainer history={props.history} />
                    </div>
                </div>
            </div>
            {Object.values(dogPics).map((dog, i) =>

                <div id="center-dog" key={i}>
                    <img className={`dog${i} doggie`} src={dog[1]} key={i} alt={dog[0]} />
                </div>

            )}
        </div>
    )
};

export default FilterPage;