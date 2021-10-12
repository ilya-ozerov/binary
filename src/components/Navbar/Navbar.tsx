import React from 'react';
import './navbar.scss';

type NavbarProps = {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    portfolioRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

export const Navbar: React.FC<NavbarProps> = ({
                                                  contactRef, aboutRef,
                                                  homeRef, portfolioRef
                                              }) => {

    const scrollTo = (el: React.RefObject<HTMLDivElement>) => {
        el.current?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <aside className="navbar">
            <ul className="navbar__list">
                <li onClick={() => scrollTo(homeRef)}>home</li>
                <li onClick={() => scrollTo(aboutRef)}>about us</li>
                <li onClick={() => scrollTo(portfolioRef)}>portfolio</li>
                <li onClick={() => scrollTo(contactRef)}>contact</li>
            </ul>
        </aside>
    );
}
