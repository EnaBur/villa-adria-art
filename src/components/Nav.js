import React from "react";

const Nav = () => {

    const logo = require('../images/logo.png');


    return(
        <div>
            <ul>
                <img alt="logo" src={logo}></img>
                <h2>Adriart</h2>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#about">About</a></li>
                
            </ul>
        </div>
    );
};

export default Nav;

