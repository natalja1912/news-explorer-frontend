import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css'
import { savedCards, userName } from '../../utils/constants';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({ loggedIn }) {
  
  return (
    <main className="savednews-content">
      <Header color="black" loggedIn={loggedIn} user={userName} />
      <SavedNewsHeader />
      <NewsCardList loggedIn={loggedIn} cards={savedCards} />
    </main>
  );
}

export default SavedNews;