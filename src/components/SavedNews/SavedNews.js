import React, { useState } from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css'
import { savedCards } from '../../utils/constants';
import NewsCardList from '../NewsCardList/NewsCardList';
import Popup from '../Popup/Popup';

function SavedNews({ loggedIn, handleExit }) {
  const [isMobile, setMobile] = useState(false);

  function handleMobile(value) {
    setMobile(value);
  }

  return (
    <section className="savednews-content">
        {!isMobile && <Header color='black' loggedIn={loggedIn} handleExit={() => handleExit()} handleMobile={value => handleMobile(value)} isMobile={isMobile} />}
        {isMobile && <Popup isOpen={isMobile} onClose={() => setMobile(false)}>
          <Header type='mobile' color='white' handleExit={() => handleExit()} isMobile={isMobile} loggedIn={loggedIn} handleMobile={value => handleMobile(value)} />
        </Popup>}
        <SavedNewsHeader />
        <NewsCardList loggedIn={loggedIn} cards={savedCards} />
    </section>
  );
}

export default SavedNews;