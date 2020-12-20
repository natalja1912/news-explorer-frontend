import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';
import { cards } from '../../utils/constants';

function Main() {

  return (
    <main>
      <Header color='white' />
      <SearchForm />
      <NewsCardList cards={cards} />
      <About />
    </main>
  );
}

export default Main;