import React from 'react';
import './about.scss';
import webImage from "../../assets/images/about/01.png";
import iosAndroidImage from "../../assets/images/about/02.png";
import marketingImage from "../../assets/images/about/03.png";

type AboutProps = {
    aboutRef: React.RefObject<HTMLDivElement>;
}

export const About: React.FC<AboutProps> = ({aboutRef}) => {
    return (
        <section ref={aboutRef} className="about">
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
    );
}
