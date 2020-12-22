import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function Header({color, loggedIn, user}) {
    return (
        <header className="header">
            <div className="header__group">
                <Link to="/" className={`header__logo header__logo_type_${color}`}>NewsExplorer</Link>
                <Navigation user={user} loggedIn={loggedIn} color={color} />
            </div>
        </header>
    );
}

export default Header;