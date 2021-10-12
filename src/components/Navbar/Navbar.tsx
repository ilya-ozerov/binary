import React, {useState} from 'react';
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

        setIsBurger(false)
    }

    const [isBurger, setIsBurger] = useState(false);

    const toggleBurger = (toggleValue: boolean) => {
        setIsBurger(toggleValue);
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }

    return (
        <aside className="navbar">
            <ul className="navbar__list">
                <li onClick={() => scrollTo(homeRef)}>home</li>
                <li onClick={() => scrollTo(aboutRef)}>about us</li>
                <li onClick={() => scrollTo(portfolioRef)}>portfolio</li>
                <li onClick={() => scrollTo(contactRef)}>contact</li>
            </ul>

            <div onClick={() => setIsBurger(true)} className="navbar__burger">
                <div></div>
            </div>

            <div className="navbar__logo">
                {/*<img src={logo} alt=""/>*/}
                binary
            </div>

            {
                isBurger &&
                <div className="navbar__mobile-menu mobile-menu">

                    <div onClick={() => setIsBurger(false)} className="mobile-menu__cross"></div>

                    <ul className="mobile-menu__list">
                        <li onClick={() => scrollTo(homeRef)}>home</li>
                        <li onClick={() => scrollTo(aboutRef)}>about us</li>
                        <li onClick={() => scrollTo(portfolioRef)}>portfolio</li>
                        <li onClick={() => scrollTo(contactRef)}>contact</li>
                    </ul>
                </div>
            }
        </aside>
    );
}
