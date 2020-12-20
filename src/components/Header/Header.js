import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <header className="header">
            <div className="header__group">
                <Link to="/" className={`header__logo header__logo_type_${props.color}`}>NewsExplorer</Link>
                <Navigation color={props.color} />
            </div>
        </header>
    );
}

export default Header;