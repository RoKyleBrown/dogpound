import React from 'react';
import {Route, Switch} from 'react-router-dom';
import DogsIndexContainer from './dogs/dogs_index_container';
import "./styling/app.css"


const App = () => (
    <div id="app">
        <div id="nav">
            <div id="logo-contain">
                <h1 id="logo">Dogpound</h1>
            </div>
        </div>
        <Switch>
            <Route exact path="/" component={DogsIndexContainer} />
        </Switch>
    </div>
);

export default App;