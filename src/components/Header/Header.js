import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <div className="header__group">
                <p className="header__logo">NewsExplorer</p>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;