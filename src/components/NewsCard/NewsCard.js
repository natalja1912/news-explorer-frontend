import React from 'react';
import './NewsCard.css';
import FlagIcon from '../FlagIcon/FlagIcon';

function NewsCard({ card }) {
    return (
        <section className="card">
            <div className="card__flag-icon"><FlagIcon /></div>
            <div className="card__info">Войдите, чтобы сохранять статьи</div>
            <img className="card__image" src={card.image} alt="Фото" />
            <div className="card__group">
                <p className="card__date">{card.date}</p>
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