import React from 'react';
import './footer.scss';
import logo from "../../assets/images/main/Layer 33 copy 2@1X.png";

type FooterProps = {
    homeRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

export const Footer: React.FC<FooterProps> = ({homeRef, contactRef}) => {

    const scrollTo = (el: React.RefObject<HTMLDivElement>) => {el.current?.scrollIntoView({behavior: "smooth"}); }

    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={logo} alt="site logo"/>
            </div>

            <div className="footer__menu">
                <ul className="footer__list">
                    <li onClick={() => scrollTo(homeRef)}>Home</li>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                    <li onClick={() => scrollTo(contactRef)}>Contact</li>
                </ul>
            </div>

            <div className="footer__copy">
                © 2021. All Rights Reserved
            </div>
        </footer>
    );
}
