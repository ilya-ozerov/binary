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
import {Footer} from "./components/Footer/Footer";

export const App = () => {
    return (
        <div className="wrapper">

            <Home />

            <Navbar />

            <About />

            <Portfolio />

            <Partners />

            <Contact />

            <Footer />

        </div>
    );
}
