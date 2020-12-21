import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css'
import { savedCards } from '../../utils/constants';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({ loggedIn }) {
  return (
    <main className="savednews-content">
      <Header color="black" />
      <SavedNewsHeader />
      <NewsCardList loggedIn={loggedIn} cards={savedCards} />
    </main>
  );
}

export default SavedNews;