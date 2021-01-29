import React from 'react';
import {Route, Switch} from 'react-router-dom';
import DogsIndexContainer from './dogs/dogs_index_container';
import "./styling/app.css";
import $ from 'jquery';

let dropOpen = false;

const dropdown = () => {
    
    if (!dropOpen){
        $(".filter-dropdown-a").addClass("filter-dropdown-b");
        dropOpen = true;
    } else {
        $(".filter-dropdown-b").removeClass("filter-dropdown-b");
        dropOpen = false;
    }
}


const App = () => (
    <div id="app">
        <div id="nav">
            <div id="logo-contain">
                <h1 id="logo">Dogpound</h1>
            </div>
            <div id="nav-button-contain">
                <div id="nav-buttons">
                    <ul>
                        <li onClick={() => dropdown()}>filter</li>
                        <li>home</li>
                    </ul>
                </div>
            </div>
        </div>
        <Switch>
            <Route exact path="/" component={DogsIndexContainer} />
        </Switch>
    </div>
);

export default App;