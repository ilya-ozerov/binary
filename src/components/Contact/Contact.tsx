import React from 'react';
import './contact.scss';

type ContactProps = {
    contactRef: React.RefObject<HTMLDivElement>;
}

export const Contact: React.FC<ContactProps> = ({contactRef}) => {
    return (
        <section ref={contactRef} className="contact">
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
                            f
                            {/*<img src="#" alt="facebook"/>*/}
                        </div>
                        <div className="contact__item">
                            in
                            {/*<img src="#" alt="linkedin"/>*/}
                        </div>
                    </div>
                    <div className="contact__mail">
                        e-mail:<span> postma.elena@gmail.com</span>
                    </div>
                </div>
            </div>

        </section>
    );
}
