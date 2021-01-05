import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Main.css';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';
import ErrorText from '../ErrorText/ErrorText';

function Main({ loggedIn }) {
  let currentUser = { name: 'Грета' };

  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [articles, setArticles] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [isLoading, setLoading] = useState({ state: false, errorText: '' });

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

  function getArticles(value) {
    const cards = localStorage.getItem('articles');
    const articles = JSON.parse(cards);
    setArticles(articles);
    setKeyWord(value);
  }

  function handleLoading(value) {
    setLoading(value);
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
        <SearchForm getArticles={(value) => getArticles(value)} setLoading={(value) => handleLoading(value)} />
        {isLoading.state && <Preloader />}
        {isLoading.errorText !== '' && <ErrorText text={isLoading.errorText} />}
        {(keyWord !== '' && !isLoading.state) && <NewsCardList cards={articles} keyWord={keyWord} loggedIn={loggedIn} />}
        <About />
      </CurrentUserContext.Provider>
    </section>
  );
}

export default Main;