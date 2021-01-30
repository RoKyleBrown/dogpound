import React from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import DogsIndexContainer from './dogs/dogs_index_container';
import FilterPageContainer from "./dogs/filter_page_container";
import { NavBar, listenForClickOut } from "./dogs/exported_functions/nav_bar";
import "./styling/app.css";



const App = () => {
    return (
    <div id="app" onClick={(e) => listenForClickOut(e)}>
        <NavBar />
        <Switch>
            <Route exact path="/" component={DogsIndexContainer} />
            <Route path="/breeds/:breed/" component={FilterPageContainer} />
        </Switch>
    </div>
    )
};

export default App;