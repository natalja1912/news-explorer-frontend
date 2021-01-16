import React, { useEffect, useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import Wrapper from '../Wrapper/Wrapper';

function NewsCardList({ cards, keyWord, loggedIn, handleSaveArticleButton }) {
    const [numberOfShownArticles, setNumberOfShownArticles] = useState(3);
    const [activeCards, setActiveCards] = useState(false);
    const [isMoreButtonActive, setMoreButtonActive] = useState(true);

    useEffect(() => {
        setActiveCards(prev => {
            if (cards.length === 0) {
                return prev;
            }
            return !prev;
        })
    }, [cards])

    function handleShowMoreButton() {
        setMoreButtonActive(prev => {
            if (shownCards.length < cards.length - 3) {
                return prev;
            }
            return !prev;
        })
        setNumberOfShownArticles(prev => prev + 3);
    }

    useEffect(() => {
        setNumberOfShownArticles(3);
    }, [keyWord])

    function handleSaveArticle(value) {
        handleSaveArticleButton(value);
    }

    let shownCards = cards.slice(0, numberOfShownArticles);

    return (
        <section className="news">
            <Wrapper className="wrapper-news">
                <p className={`news__text ${!activeCards && `news__text_active`}`}>Ничего не найдено</p>
                <div className={`news__group ${activeCards && `news__group_active`}`}>
                    {!loggedIn && <h2 className="news__heading">Результаты поиска</h2>}
                    <div className="cards">
                        {shownCards.map((item, index) => (<NewsCard key={index} card={{ 'keyword': keyWord, 'image': item.image, 'link': item.link, 'title': item.title, 'text': item.text, 'source': item.source, 'date': item.date }} loggedIn={loggedIn} handleSaveArticleButton={(value) => handleSaveArticle(value)} />))}
                    </div>
                    {isMoreButtonActive && <button className="news__button" onClick={handleShowMoreButton}>Показать еще</button>}
                </div>
            </Wrapper>
        </section>
    );
}

export default NewsCardList;