import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Wrapper from '../Wrapper/Wrapper';

function Header({ color, loggedIn, handleAuth, handleMobile, isMobile }) {

    function handleMenuClick(){
        handleMobile(!isMobile);
    }

    return (
        <header className="header">
            <Wrapper>
                <div className="header__group">
                    <Link to="/" className={`header__logo header__logo_type_${color}`}>NewsExplorer</Link>
                    <button className={`header__menu-button header__menu-button_type_${color} ${isMobile && `header__menu-button_active`}`} onClick={handleMenuClick}></button>
                    <Navigation loggedIn={loggedIn} color={color} handleAuth={handleAuth} />
                </div>
            </Wrapper>
        </header >
    );
}

export default Header;