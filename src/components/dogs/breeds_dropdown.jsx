import React from 'react';
import { useEffect } from 'react';
import {  dropdown, highlightPoodle } from './exported_functions/nav_bar';
import "../styling/breeds_dropdown.css"

let breedSet = new Set();

const BreedsDropdown = (props) => {

    useEffect( () => {
        props.fetchAllDogs();
    }, [])

    const loadDogs = () => {
        if (props.allDogs !== undefined) {
            props.allDogs.forEach((dog) => {
                let dogUrl = dog.split("\/");
                let breed = dogUrl[dogUrl.length - 2];
                breedSet.add(breed);
            })
        }
    };

    loadDogs();
    
    return (
        <ul>
            {Array.from(breedSet).map( (breed, i) => 
                <li className={`breed${i} breed-item`}
                    onClick={() => {
                        props.history.push(`/breeds/${breed}`)
                        dropdown();
                        highlightPoodle();
                        window.location.reload();
                    }} 
                    key={i}>
                        <div>{`#${breed}`}</div>
                        <div id="line"></div>
                </li>
                )}
        </ul>
    )
}

export default BreedsDropdown; 