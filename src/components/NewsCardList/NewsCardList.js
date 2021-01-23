import React, { useEffect, useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import Wrapper from '../Wrapper/Wrapper';
import {numberOfShownCards} from '../../utils/constants';

function NewsCardList({ cards, keyWord, loggedIn, handleSaveArticleButton, handleDeleteArticleButton }) {
    const [numberOfShownArticles, setNumberOfShownArticles] = useState(3);
    const [activeCards, setActiveCards] = useState();
    const [isMoreButtonActive, setMoreButtonActive] = useState();

    useEffect(() => {
        setActiveCards(prev => {
            if (cards.length === 0) {
                return false;
            }
            return true;
        })
        setMoreButtonActive(prev => {
            if (cards.length <= numberOfShownCards) {
                return false;
            }
            if (cards.length === shownCards.length) {
                return false;
            }
            return true;
        })
    }, [cards])

    function handleShowMoreButton() {
        setMoreButtonActive(prev => {
            if ((shownCards.length < cards.length - numberOfShownCards) && cards.length > numberOfShownCards) {
                return true;
            }
            return false;
        })
        setNumberOfShownArticles(prev => prev + numberOfShownCards);
    }

    useEffect(() => {
        setNumberOfShownArticles(numberOfShownCards);
    }, [keyWord])

    function handleSaveArticle(value) {
        handleSaveArticleButton(value);
    }

    function handleDeleteArticle(value) {
        handleDeleteArticleButton(value);
    }

    let shownCards = cards.slice(0, numberOfShownArticles);

    return (
        <section className="news">
            <Wrapper className="wrapper-news">
                <div className={`news__text-group ${!activeCards && `news__text-group_active`}`}>
                    <div className="news__not-found-icon"></div>
                    <p className="news__bold-text">Ничего не найдено</p>
                    <p className="news__text">К сожалению по вашему запросу ничего не найдено.</p>
                </div>
                <div className={`news__group ${activeCards && `news__group_active`}`}>
                    {!loggedIn && <h2 className="news__heading">Результаты поиска</h2>}
                    <div className="cards">
                        {shownCards.map((item, index) => (<NewsCard key={index} card={{ 'keyword': item.keyword, '_id': item._id, 'image': item.image, 'link': item.link, 'title': item.title, 'text': item.text, 'source': item.source, 'date': item.date }} loggedIn={loggedIn} handleSaveArticleButton={(value) => handleSaveArticle(value)} handleDeleteArticleButton={(value) => handleDeleteArticle(value)} />))}
                    </div>
                    {isMoreButtonActive && <button className="news__button" onClick={handleShowMoreButton}>Показать еще</button>}
                </div>
            </Wrapper>
        </section>
    );
}

export default NewsCardList;