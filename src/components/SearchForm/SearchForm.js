import React, { useState } from 'react';
import './SearchForm.css';
import newsApi from '../../utils/NewsApi';

function SearchForm() {
    const [inputValue, setInputValue] = useState('');

    function handleSearchButton(event) {
        event.preventDefault();
        newsApi.getCards(inputValue)
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            })
        setInputValue('');
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