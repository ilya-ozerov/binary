import React, {useRef} from 'react';
import './App.scss';

import {Home} from "./components/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";
import {About} from "./components/AboutUs/About";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Partners} from "./components/Partners/Partners";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";

export const App = () => {

    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return (
        <div className="wrapper">

            <Home homeRef={homeRef} aboutRef={aboutRef} />

            <Navbar contactRef={contactRef} homeRef={homeRef}
                    portfolioRef={portfolioRef} aboutRef={aboutRef} />

            <About aboutRef={aboutRef} />

            <Portfolio portfolioRef={portfolioRef} />

            <Partners />

            <Contact contactRef={contactRef} />

            <Footer />

        </div>
    );
}
