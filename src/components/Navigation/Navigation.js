import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';

function Navigation({color, loggedIn, user}) {
    const location = useLocation();
 
    return (
        <nav className="nav">
           <Link to="/" className={`nav__link nav__link_color_${color} ${location.pathname === '/' && `nav__link_type_active`}`}>Главная</Link>
           {loggedIn && <Link to="/saved-news" className={`nav__link nav__link_color_${color} ${location.pathname === '/saved-news' && `nav__link_type_active`}`}>Сохранённые статьи</Link>}
           {loggedIn ? <Link to="/signin" className={`nav__link nav__link_color_${color} nav__link_type_auth nav__link_type_user`}>{user}</Link>
           : <Link to="/signin" className={`nav__link nav__link_color_${color} nav__link_type_auth`}>Авторизоваться</Link>}
        </nav>
    );
}

export default Navigation;