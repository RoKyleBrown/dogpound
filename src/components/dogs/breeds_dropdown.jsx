import React from 'react';
import { useEffect } from 'react';

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
                <li key={i}>{breed}</li>
                )}
        </ul>
    )
}

export default BreedsDropdown; 