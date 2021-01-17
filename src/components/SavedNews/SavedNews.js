import React, { useState } from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css'
import NewsCardList from '../NewsCardList/NewsCardList';
import Popup from '../Popup/Popup';

function SavedNews({ loggedIn, handleExit, savedArticles, handleDeleteArticle }) {
  let sortedCards = savedArticles.sort((a, b) => parseInt(a._id.slice(-2), 16) < parseInt(b._id.slice(-2), 16) ? 1 : -1);

  const [isMobile, setMobile] = useState(false);

  function handleMobile(value) {
    setMobile(value);
  }

  function handleDeleteArticleButton(card) {
    handleDeleteArticle(card);
  }

  return (
    <section className="savednews-content">
      {!isMobile && <Header color='black' loggedIn={loggedIn} handleExit={() => handleExit()} handleMobile={value => handleMobile(value)} isMobile={isMobile} />}
      {isMobile && <Popup isOpen={isMobile} onClose={() => setMobile(false)}>
        <Header type='mobile' color='white' handleExit={() => handleExit()} isMobile={isMobile} loggedIn={loggedIn} handleMobile={value => handleMobile(value)} />
      </Popup>}
      <SavedNewsHeader savedNews={savedArticles} />
      <NewsCardList loggedIn={loggedIn} cards={sortedCards} handleDeleteArticleButton={(value) => handleDeleteArticleButton(value)} />
    </section>
  );
}

export default SavedNews;