import React from 'react';
import './App.scss';

import logo from './assets/images/main/Layer 33 copy 2@1X.png';
import bg from './assets/images/main/BG-Header@1X.jpeg';

import webImage from './assets/images/about/01.png';
import iosAndroidImage from './assets/images/about/02.png';
import marketingImage from './assets/images/about/03.png';

export const App = () => {
    return (
        <div className="wrapper">
            <section className="home">

                <img src={bg} className="home__background"/>

                <div className="home__content">
                    <div className="home__logo">
                        <img src={logo} alt="site logo"/>
                    </div>

                    <div className="home__title title">
                        <h1>Clear, smart, attractive design</h1>
                        <h2>for your app, logo, website</h2>
                    </div>

                    <div className="home__button button">
                        <button>
                            READ MORE
                        </button>
                    </div>
                </div>

            </section>

            <aside className="navbar">
                <ul className="navbar__list">
                    <li>home</li>
                    <li>about us</li>
                    <li>portfolio</li>
                    <li>contact</li>
                </ul>
            </aside>

            <section className="about">
                <div className="about__title title">
                    <h2>about</h2>
                </div>

                <div className="about__text">
                    <p>
                        We specialize in contemporary, functional, and stunning websites with design that really brings
                        that "WOW" factor.
                        In our design process, we make sure to stay one step ahead of the latest trends,
                        never forgetting to abide by key web standards.
                    </p>
                </div>

                <div className="about__columns">
                    <div className="about__column item">
                        <div className="item__image">
                            <img src={webImage} alt=""/>
                        </div>
                        <div className="item__title">
                            <h3>Web</h3>
                        </div>
                        <div className="item__text">
                            <p>
                                We tend to deliver unique and
                                functional design, through
                                innovation and creativity.
                            </p>
                        </div>
                    </div>

                    <div className="about__column item">
                        <div className="item__image">
                            <img src={iosAndroidImage} alt=""/>
                        </div>
                        <div className="item__title">
                            <h3>iOS AND ANDROID</h3>
                        </div>
                        <div className="item__text">
                            <p>
                                We seek to bring new businesses and
                                customers closer together through valuable
                                insights and proper targeting.
                            </p>
                        </div>
                    </div>

                    <div className="about__column item">
                        <div className="item__image">
                            <img src={marketingImage} alt=""/>
                        </div>
                        <div className="item__title">
                            <h3>MARKETING</h3>
                        </div>
                        <div className="item__text">
                            <p>
                                We’ll help you establish the right goals
                                and build the right paths. Success depends
                                on setting the right intention.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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
