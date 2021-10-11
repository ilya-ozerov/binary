import React from 'react';
import './partners.scss';

import bg from "../../assets/images/partners/bg-partners.png"

import logo1 from "../../assets/images/partners/logo-2@1X.png"
import logo2 from "../../assets/images/partners/Archiq@1X.png"
import logo3 from "../../assets/images/partners/Thomsoon@1X.png"
import logo4 from "../../assets/images/partners/alex@1X.png"

export const Partners = () => {
    return (
        <section className="partners">
            <img className="partners__background" src={bg} alt='background'/>
            <div className="partners__content">
                <div className="partners__title">
                    <h2>Our Partners</h2>
                </div>
                <div className="partners__row">
                    <div className="partners__item">
                        <div className="partners__image">
                            <img src={logo1} alt="partners item"/>
                        </div>
                    </div>

                    <div className="partners__item">
                        <div className="partners__image">
                            <img src={logo2} alt="partners item"/>
                        </div>
                    </div>

                    <div className="partners__item">
                        <div className="partners__image">
                            <img src={logo3} alt="partners item"/>
                        </div>
                    </div>

                    <div className="partners__item">
                        <div className="partners__image">
                            <img src={logo4} alt="partners item"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
