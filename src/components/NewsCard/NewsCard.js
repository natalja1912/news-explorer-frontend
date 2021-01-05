import React from 'react';
import './NewsCard.css';
import FlagIcon from '../icons/FlagIcon/FlagIcon';
import TrashIcon from '../icons/TrashIcon/TrashIcon';

function NewsCard({ card, loggedIn }) {
    let cardInfoText ="";
    loggedIn ? cardInfoText ="Убрать из сохранённых" : cardInfoText="Войдите, чтобы сохранять статьи";
    let date = Date.parse(card.date);
    date = new Date(date).toLocaleString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    

    return (
        <section className="card">
            {loggedIn && <div className="card__keyword">{card.keyword}</div>}
            <div className="card__flag-icon">{loggedIn ? <TrashIcon /> : <FlagIcon />}</div>
            <div className={`card__info ${loggedIn ? `card__info_logged` : `card__info_notlogged`}`}>
                {cardInfoText}
                </div>
            <img className="card__image" src={card.image} alt="Фото" />
            <div className="card__group">
                <p className="card__date">{date}</p>
                <div className="card__text-group">
                    <h2 className="card__heading">{card.title}</h2>
                    <p className="card__text">{card.text}</p>
                </div>
                <p className="card__source">{card.source}</p>
            </div>
        </section>
    );
}

export default NewsCard;