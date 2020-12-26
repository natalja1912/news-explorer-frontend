import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';
import { cards } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main({ loggedIn }) {

  const currentUser = { name: 'Грета' };

  return (
    <main>
        <CurrentUserContext.Provider value={currentUser}>
          <Header color='white' loggedIn={loggedIn} />
          <SearchForm />
          <NewsCardList loggedIn={loggedIn} cards={cards} />
          <About />
        </CurrentUserContext.Provider>
    </main>
  );
}

export default Main;