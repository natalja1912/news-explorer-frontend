import React, { useState } from 'react';
import './SearchForm.css';
import newsApi from '../../utils/NewsApi';

function SearchForm({getArticles, setLoading}) {
    const [inputValue, setInputValue] = useState('');

    function handleSearchButton(event) {
        event.preventDefault();
        setLoading({ state: true, errorText: ''});
        newsApi.getCards(inputValue)
            .then((data) => {
                const articles = JSON.stringify(data.articles);
                localStorage.setItem('articles', articles);
                getArticles(inputValue);
                setLoading({ state: false, errorText: ''});
            })
            .catch((err) => {
                console.log(err);
                setLoading({ state: false, errorText: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'});
            })
    }

    return (
        <section className="search">
            <div className="search__group">
                <h1 className="search__heading">Что творится в мире?</h1>
                <p className="search__subheading">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <form className="search__form">
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="search__input" placeholder="Введите тему новости" />
                    <button className="search__button" onClick={(event) => handleSearchButton(event)}>Искать</button>
                </form>
            </div>
        </section>
    );
}

export default SearchForm;