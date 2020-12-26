import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css'
import { savedCards } from '../../utils/constants';
import NewsCardList from '../NewsCardList/NewsCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNews({ loggedIn }) {
  const currentUser = { name: 'Грета' };

  return (
    <main className="savednews-content">
      <CurrentUserContext.Provider value={currentUser}>
          <Header color="black" loggedIn={loggedIn} />
          <SavedNewsHeader />
          <NewsCardList loggedIn={loggedIn} cards={savedCards} />
      </CurrentUserContext.Provider>
    </main>
  );
}

export default SavedNews;