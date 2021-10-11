import React from 'react';
import './App.scss';

import logo from './assets/images/main/Layer 33 copy 2@1X.png';

import webImage from './assets/images/about/01.png';
import iosAndroidImage from './assets/images/about/02.png';
import marketingImage from './assets/images/about/03.png';
import {Home} from "./components/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";
import {About} from "./components/AboutUs/About";

export const App = () => {
    return (
        <div className="wrapper">

            <Home />

            <Navbar />

            <About />

            <section className="portfolio">
                <div className="portfolio__title title">
                    <h2>Portfolio</h2>
                </div>

                <ul className="portfolio__selector">
                    <li>all</li>
                    <li>web</li>
                    <li>apps</li>
                    <li>other</li>
                </ul>

                <div className="portfolio__gallery">
                    <div className="portfolio__item">
                        <div className="portfolio__image">
                            <img src="#" alt="portfolio item"/>
                        </div>
                    </div>
                    <div className="portfolio__item">
                        <div className="portfolio__image">
                            <img src="#" alt="portfolio item"/>
                        </div>
                    </div>

                    <div className="portfolio__item">
                        <div className="portfolio__image">
                            <img src="#" alt="portfolio item"/>
                        </div>
                    </div>
                    <div className="portfolio__item">
                        <div className="portfolio__image">
                            <img src="#" alt="portfolio item"/>
                        </div>
                    </div>

                    <div className="portfolio__item">
                        <div className="portfolio__image">
                            <img src="#" alt="portfolio item"/>
                        </div>
                    </div>
                    <div className="portfolio__item">
                        <div className="portfolio__image">
                            <img src="#" alt="portfolio item"/>
                        </div>
                    </div>
                </div>

                <div className="portfolio__button button">
                    <button>
                        Read more
                    </button>
                </div>
            </section>

            <section className="partners">
                <div className="partners__title">
                    <h2>Our Partners</h2>
                </div>
                <div className="partners__row">
                    <div className="partners__item">
                        <div className="partners__image">
                            <img src="#" alt="partners item"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact">
                <div className="contact__title title">
                    <h2>Contact</h2>
                </div>

                <div className="contact__row">
                    <div className="contact__form form">
                        <div className="form__name">
                            <p>Your name</p>
                            <input type="text"/>
                        </div>
                        <div className="form__email">
                            <p>Your e-mail</p>
                            <input type="text"/>
                        </div>

                        <div className="form__message">
                            <p>Your message</p>
                            <textarea/>
                        </div>

                        <div className="form__button">
                            <button>Send</button>
                        </div>
                    </div>

                    <div className="contact__info">
                        <div className="contact__text">
                            <p>
                                Have an idea for a project? Just looking to
                                explore and see the possibilities?
                                I'm here to help.


                            </p>
                        </div>
                        <div className="contact__author">Postma Elena</div>
                        <div className="contact__socials">
                            <div className="contact__item">
                                <img src="#" alt="facebook"/>
                            </div>
                            <div className="contact__item">
                                <img src="#" alt="linkedin"/>
                            </div>
                        </div>
                        <div className="contact__mail">
                            <span>e-mail:</span> postma.elena@gmail.com
                        </div>
                    </div>
                </div>

            </section>

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
