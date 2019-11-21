import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/recipe/waffles">Waffles</NavLink></li>
                <li><NavLink to="/recipe/squid">Squid</NavLink></li>
            </ul>
        </nav>
    );
}