import React from 'react';
import './navbar.scss';

export const Navbar = () => {
    return (
        <aside className="navbar">
            <ul className="navbar__list">
                <li>home</li>
                <li>about us</li>
                <li>portfolio</li>
                <li>contact</li>
            </ul>
        </aside>
    );
}
