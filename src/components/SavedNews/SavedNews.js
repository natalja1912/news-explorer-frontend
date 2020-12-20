import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css'
import { cards } from '../../utils/constants';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews() {
  return (
    <main className="savednews-content">
        <Header color="black" />
        <SavedNewsHeader />
        <NewsCardList cards={cards} />
    </main>
  );
}

export default SavedNews;