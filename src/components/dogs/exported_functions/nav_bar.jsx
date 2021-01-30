import $ from 'jquery';
import { useHistory } from "react-router-dom";
import React from 'react';


let dropOpen = false;

export const dropdown = () => {

    if (!dropOpen) {
        $(".filter-dropdown-a").addClass("filter-dropdown-b");
        $(".arrow-up-a").addClass("arrow-up-b");
        dropOpen = true;
    } else {
        $(".filter-dropdown-b").removeClass("filter-dropdown-b");
        $(".arrow-up-b").removeClass("arrow-up-b");
        dropOpen = false;
    }
};

export const listenForClickOut = (e) => {

    const el = document.querySelector(".filter-dropdown-b");

    if (e.target.className === ("filter")) return;
    if (!el) return;
    if (e.target.className.includes("filter-dropdown-b")) return;
    dropdown();

};

export const NavBar = () => {
    const history = useHistory();
    const goHome = () => {
        history.push('/');
        window.location.reload();
    };
    return (
        <div id="nav">
            <div id="logo-contain">
                <h1 id="logo" onClick={() => goHome()} ><div >Dogpound</div></h1>
            </div>
            <div id="nav-button-contain">
                <div id="nav-buttons">
                    <ul>
                            <li className="filter"
                                onClick={() => {
                                    dropdown();
                                }} 
                                >filter
                            </li>
                        <li><div onClick={() => goHome()}>home</div></li>
                    </ul>
                </div>
            </div>
            <div id="arrow-contain">
                <div className="arrow" id="nav-buttons">
                    <ul>
                        <li ><div id="center-arrow" style={{cursor:"default"}}>
                            <div
                                style={{ opacity:"0"}} 
                                >filter</div>
                            <div className="arrow-up-a"></div></div>
                        </li>
                        <li><div 
                            style={{
                                opacity:"0",
                                cursor:"default"
                            }}
                            >home</div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};