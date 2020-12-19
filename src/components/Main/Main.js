import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCard from '../NewsCard/NewsCard';

function Main() {

  return (
    <main className="content">
      <SearchForm />
      <About />
      <NewsCard />
    </main>
  );
}

export default Main;