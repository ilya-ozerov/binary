import React from 'react';
import './App.scss';

import logo from './assets/images/main/Layer 33 copy 2@1X.png';

import webImage from './assets/images/about/01.png';
import iosAndroidImage from './assets/images/about/02.png';
import marketingImage from './assets/images/about/03.png';
import {Home} from "./components/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";
import {About} from "./components/AboutUs/About";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Partners} from "./components/Partners/Partners";
import {Contact} from "./components/Contact/Contact";

export const App = () => {
    return (
        <div className="wrapper">

            <Home />

            <Navbar />

            <About />

            <Portfolio />

            <Partners />

            <Contact />

            <footer className="footer">
                <div className="footer__logo">
                    <img src={logo} alt="site logo"/>
                </div>

                <div className="footer__menu">
                    <ul className="footer__list">
                        <li>Home</li>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer__copy">
                    © 2021. All Rights Reserved
                </div>
            </footer>
        </div>
    );
}
