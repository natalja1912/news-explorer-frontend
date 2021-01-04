import React, { useState } from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css'
import { savedCards } from '../../utils/constants';
import NewsCardList from '../NewsCardList/NewsCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Popup from '../Popup/Popup';

function SavedNews({ loggedIn }) {
  const currentUser = { name: 'Грета' };
  const [isMobile, setMobile] = useState(false);

  function handleMobile(value) {
    setMobile(value);
  }

  return (
    <section className="savednews-content">
      <CurrentUserContext.Provider value={currentUser}>
        {!isMobile && <Header color='black' loggedIn={loggedIn} handleMobile={value => handleMobile(value)} isMobile={isMobile} />}
        {isMobile && <Popup isOpen={isMobile} onClose={() => setMobile(false)}>
          <Header type='mobile' color='white' isMobile={isMobile} loggedIn={loggedIn} handleMobile={value => handleMobile(value)} />
        </Popup>}
        <SavedNewsHeader />
        <NewsCardList loggedIn={loggedIn} cards={savedCards} />
      </CurrentUserContext.Provider>
    </section>
  );
}

export default SavedNews;