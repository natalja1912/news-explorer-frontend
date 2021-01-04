import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Wrapper from '../Wrapper/Wrapper';

function Header({ color, hidden, loggedIn, handleAuth, handleMobile, isMobile, setHeaderVisible }) {

    function handleMenuClick() {
        handleMobile(!isMobile);
    }

    function handleAuthButton(){
        handleAuth(true);
    }

    return (
        <header className={`header ${isMobile && `header_type_mobile`} ${hidden && `header_hidden`}`}>
            <Wrapper className={`${isMobile && `wrapper_no-padding`}`}>
                <div className="header__group">
                    <div className="header__mobile-group">
                        <Link to="/" className={`header__logo header__logo_type_${color}`}>NewsExplorer</Link>
                        <button className={`header__menu-button header__menu-button_type_${color} ${isMobile && `header__menu-button_active`}`} onClick={handleMenuClick}></button>
                    </div>
                    <Navigation isMobile={isMobile} loggedIn={loggedIn} color={color} handleAuth={handleAuthButton} setHeaderVisible={(value) => setHeaderVisible(value)} />
                </div>
            </Wrapper>
        </header >
    );
}

export default Header;