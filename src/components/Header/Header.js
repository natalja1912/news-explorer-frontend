import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Wrapper from '../Wrapper/Wrapper';

function Header({ color, loggedIn }) {
    return (
        <header className="header">
            <Wrapper>
                <div className="header__group">
                    <Link to="/" className={`header__logo header__logo_type_${color}`}>NewsExplorer</Link>
                    <button className={`header__button header__button_type_${color}`}></button>
                    <Navigation loggedIn={loggedIn} color={color} />
                </div>
            </Wrapper>
        </header>
    );
}

export default Header;