import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';
import { cards } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Main.css';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Popup from '../Popup/Popup';

function Main({ loggedIn }) {
  let currentUser = { name: 'Грета' };

  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);

  function onUpdateUser(value) {
    const { email, name } = value;
    currentUser = {
      name: name,
      email: email,
    }
  }

  function handleMobile(value) {
    setMobile(value);
  }

  function handleAuth(value) {
    setLoginPopupOpen(value);
    setMobile(!value);
  }

  return (
    <section className="main-page">
      <CurrentUserContext.Provider value={currentUser}>
        <LoginPopup isOpen={isLoginPopupOpen} onClose={() => setLoginPopupOpen(false)} redirectLoginPopup={(value) => setRegisterPopupOpen(value)} onUpdateUser={(value) => onUpdateUser(value)}></LoginPopup>
        <RegisterPopup isOpen={isRegisterPopupOpen} onClose={() => setRegisterPopupOpen(false)} redirectRegisterPopup={(value) => setLoginPopupOpen(value)} onUpdateUser={(value) => onUpdateUser(value)}></RegisterPopup>
        {!isMobile && <Header color='white' hidden={isLoginPopupOpen || isRegisterPopupOpen} loggedIn={loggedIn} handleAuth={value => setLoginPopupOpen(value)} handleMobile={value => handleMobile(value)} isMobile={isMobile} />}
        {isMobile && <Popup isOpen={isMobile} onClose={() => setMobile(false)}>
          <Header type='mobile' color='white' isMobile={isMobile} loggedIn={loggedIn} handleAuth={value => handleAuth(value)} handleMobile={value => handleMobile(value)} />
        </Popup>}
        <SearchForm />
        <NewsCardList loggedIn={loggedIn} cards={cards} />
        <About />
      </CurrentUserContext.Provider>
    </section>
  );
}

export default Main;