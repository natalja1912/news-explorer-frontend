import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation({ color, loggedIn, handleAuth, isMobile }) {
    const location = useLocation();
    const currentUser = React.useContext(CurrentUserContext);

    function handleAuthButton() {
        handleAuth();
    }

    return (
        <nav className={`nav ${isMobile && `nav_mobile`}`}>
            <Link to="/" className={`nav__link nav__link_type_main nav__link_color_${color} ${location.pathname === '/' && `nav__link_type_active`}`}>Главная</Link>
            {loggedIn && <Link to="/saved-news" className={`nav__link nav__link_color_${color} ${location.pathname === '/saved-news' && `nav__link_type_active`}`}>Сохранённые статьи</Link>}
            {loggedIn ? <Link to="/signin" className={`nav__link nav__link_color_${color} nav__link_type_auth nav__link_type_user_${color}`}>{currentUser.name}</Link>
                : <button onClick={handleAuthButton} className={`nav__link nav__link_color_${color} nav__link_type_auth`}>Авторизоваться</button>}
        </nav>
    );
}

export default Navigation;