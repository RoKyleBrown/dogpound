import React from 'react';
import { useEffect } from 'react';
import {  dropdown } from './exported_functions/nav_bar';

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
                <li className={`breed${i}`}
                    onClick={() => {
                        
                        props.history.push(`/breeds/${breed}`)
                        dropdown();
                        window.location.reload();
                    }} 
                    key={i}>{breed}</li>
                )}
        </ul>
    )
}

export default BreedsDropdown; 