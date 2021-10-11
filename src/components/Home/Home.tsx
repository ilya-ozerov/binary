import React from 'react';
import './home.scss';

import logo from '../../assets/images/main/Layer 33 copy 2@1X.png';
import bg from '../../assets/images/main/BG-Header@1X.jpeg';

export const Home = () => {
    return (
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
    );
}
