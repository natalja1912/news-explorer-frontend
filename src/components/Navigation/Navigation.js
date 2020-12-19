import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <nav className="nav">
           <Link to="/" className="nav__link nav__link_type_active">Главная</Link>
           <Link to="/signin" className="nav__link nav__link_type_auth">Авторизоваться</Link>
        </nav>
    );
}

export default Navigation;