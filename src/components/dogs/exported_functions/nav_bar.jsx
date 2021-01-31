import $ from 'jquery';
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';


let dropOpen = false;
let poodle = "https://dogpound.s3-us-west-1.amazonaws.com/poodle_outline.png";
let solidPoodle = "https://dogpound.s3-us-west-1.amazonaws.com/poodle_solid.png";
let house = "https://dogpound.s3-us-west-1.amazonaws.com/house_outline.png";
let solidHouse = "https://dogpound.s3-us-west-1.amazonaws.com/house_solid.png";

export const highlightPoodle = () => {
    $(".filter-a").addClass("filter-a-after");
    $(".filter-a").removeClass("filter-a");
    $(".filter-b").addClass("filter-b-after");
}

const deslectPoodle = () => {
    $(".filter-a-after").addClass("filter-a");
    $(".filter-a-after").removeClass("filter-a-after");
    $(".filter-b-after").removeClass("filter-b-after");
}

export const highlightHouse = () => {
    $(".home-a").addClass("home-a-after");
    $(".home-a").removeClass("home-a");
    $(".home-b").addClass("home-b-after");
}

const deselectHouse = () => {
    $(".home-a-after").addClass("home-a");
    $(".home-a-after").removeClass("home-a-after");
    $(".home-b-after").removeClass("home-b-after");
}

export const dropdown = () => {


    if (!dropOpen) {

        $(".filter-dropdown-a").addClass("filter-dropdown-b");
        $(".arrow-up-a").addClass("arrow-up-b");
        highlightPoodle();
        deselectHouse();
        dropOpen = true;
    } else {
        $(".filter-dropdown-b").removeClass("filter-dropdown-b");
        $(".arrow-up-b").removeClass("arrow-up-b");
        deslectPoodle();
        dropOpen = false;
    }
};

export const listenForClickOut = (e) => {

    const el = document.querySelector(".filter-dropdown-b");

    let target = e.target.className;
    let url = e.view.location["hash"].split("/");

    if (target === "filter-a" || target === "filter-a-after") return;
    if (target === "filter-b filter-b-after" || target === "filter-b filter-b-after") return;
    if (!el) return;
    if (target.includes("filter-dropdown-b")) return;

    if (url[1] === "breeds") {
        dropdown();
        highlightPoodle();
    } else if (url[1] === "") {
        dropdown();
        highlightHouse();
    } else {
        dropdown();
    }

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
                            <li> 
                                <div>
                                    <img className="filter-a"
                                        onClick={() => {
                                            dropdown();
                                        }} src={poodle} alt="filter-a"/>
                                    <img className="filter-b"
                                        onClick={() => {
                                            dropdown();
                                        }} src={solidPoodle} alt="filter-b"/>
                                </div> 
                            </li>
                            <li>
                                <div onClick={() =>{ 
                                        goHome();
                                        deslectPoodle();
                                        highlightHouse();
                                    }}>
                                    <img className="home-a" 
                                        src={house} alt="home-a"/>
                                    <img className="home-b" 
                                        src={solidHouse} alt="home-b"/>
                                </div>
                            </li>
                    </ul>
                </div>
            </div>
            <div id="arrow-contain">
                <div className="arrow" id="nav-buttons">
                    <ul>
                        <li ><div id="center-arrow" style={{cursor:"default"}}>
                            <div style={{opacity: "0"}}>
                                <img className="filter-a"
                                    onClick={() => {
                                        dropdown();
                                    }} src={poodle} alt="filter-a" />
                                <img className="filter-b"
                                    onClick={() => {
                                        dropdown();
                                    }} src={solidPoodle} alt="filter-b" />
                            </div> 
                            <div className="arrow-up-a"></div>
                            </div>
                        </li>
                        <li>
                            <div 
                            style={{
                                opacity:"0",
                                cursor:"default"}}>
                                <img className="home-a" 
                                    src={house} alt="home-a"/>
                                <img className="home-b" 
                                    src={solidHouse} alt="home-b" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};