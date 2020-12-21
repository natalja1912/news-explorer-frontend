import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({cards, loggedIn}) {
    const sortedCards = cards.sort((a, b) => a._id > b._id ? 1 : -1);

    return (
        <section className="news">
            <h2 className="news__heading">Результаты поиска</h2>
            <div className="cards">
                {sortedCards.map((item) => (<NewsCard key={item._id} card={item} loggedIn={loggedIn}  />))}
            </div>
            <button className="news__button">Показать еще</button>
        </section>
    );
}

export default NewsCardList;