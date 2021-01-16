import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import './NewsCard.css';
import FlagIcon from '../icons/FlagIcon/FlagIcon';
import TrashIcon from '../icons/TrashIcon/TrashIcon';

function NewsCard({ card, loggedIn, handleSaveArticleButton }) {
    const location = useLocation();
    const [flagButtonState, setFlagButtonState] = useState(false);

    let cardInfoText = "";
    loggedIn ? cardInfoText = "Убрать из сохранённых" : cardInfoText = "Войдите, чтобы сохранять статьи";
    let date = Date.parse(card.date);
    date = new Date(date).toLocaleString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    function handleFlagButton() {
        setFlagButtonState(prev => {
            if (loggedIn) {
                return !prev;
            }
            return prev;
        })
        handleSaveArticleButton({ link: card.link, date: card.date, title: card.title, text: card.text, image: card.image, source: card.source, keyword: card.keyword });
    }

    let savedNewsMode = loggedIn && (location.pathname === '/saved-news');

    return (
        <section className="card">
            {savedNewsMode && <div className="card__keyword">{card.keyword}</div>}
            <button className="card__flag-icon" onClick={handleFlagButton}>{savedNewsMode ? <TrashIcon /> : <FlagIcon activeClassName={(flagButtonState && loggedIn) && `flag_active`} />}</button>
            {(!loggedIn || flagButtonState) && <div className={`card__info ${loggedIn ? `card__info_logged` : `card__info_notlogged`}`}>
                {cardInfoText}
            </div>}
            <a className="card__link" href={card.link} target="_blank" rel='noreferrer'>
                <img className="card__image" src={card.image} alt="Фото" />
                <div className="card__group">
                    <p className="card__date">{date}</p>
                    <div className="card__text-group">
                        <h2 className="card__heading">{card.title}</h2>
                        <p className="card__text">{card.text}</p>
                    </div>
                    <p className="card__source">{card.source}</p>
                </div>
            </a>
        </section>
    );
}

export default NewsCard;