import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy;2020&nbsp;Supersite,&nbsp;Powered&nbsp;by&nbsp;News&nbsp;API</p>
            <div className="footer__links">
                <Link className="footer__link" to="/">Главная</Link>
                <a className="footer__link" href="https://praktikum.yandex.ru" target="_blank">Яндекс.Практикум</a>
                <div className="footer__icons">
                    <a className="footer__icon footer__icon_type_github" target="_blank" href="https://github.com/natalja1912"></a>
                    <a className="footer__icon footer__icon_type_fb" target="_blank" href="https://www.facebook.com/"></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;