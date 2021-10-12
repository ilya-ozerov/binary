import React from 'react';
import './portfolio.scss';

type PortfolioProps = {
    portfolioRef: React.RefObject<HTMLDivElement>;
}

export const Portfolio: React.FC<PortfolioProps> = ({portfolioRef}) => {
    return (
        <section ref={portfolioRef} className="portfolio">
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
    );
}
