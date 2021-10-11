import React from 'react';
import './footer.scss';
import logo from "../../assets/images/main/Layer 33 copy 2@1X.png";

export const Footer = () => {
    return (
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
    );
}
