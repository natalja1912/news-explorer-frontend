import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation({ color, loggedIn, handleAuth, isMobile, handleExit }) {
    const location = useLocation();
    const currentUser = React.useContext(CurrentUserContext);

    function handleAuthButton() {
        handleAuth();
    }

    return (
        <nav className={`nav ${isMobile && `nav_mobile`}`}>
            <Link to="/" className={`nav__link nav__link_type_main nav__link_color_${color} ${location.pathname === '/' && `nav__link_type_active`}`}>Главная</Link>
            {loggedIn && <Link to="/saved-news" className={`nav__link nav__link_type_saved nav__link_color_${color} ${location.pathname === '/saved-news' && `nav__link_type_active`}`}>Сохранённые статьи</Link>}
            {loggedIn ?
                <div className={`nav__link nav__link_color_${color} nav__link_type_auth nav__link_type_user_${color}`}>
                    <button className={`nav__link-text nav__link_color_${color}`}  onClick={handleExit}>{currentUser}</button>
                    <button className={`nav__link-icon nav__link-icon_${color}`}></button>
                </div>
                : <button onClick={handleAuthButton} className={`nav__link nav__link_color_${color} nav__link_type_auth`}>Авторизоваться</button>}
        </nav>
    );
}

export default Navigation;