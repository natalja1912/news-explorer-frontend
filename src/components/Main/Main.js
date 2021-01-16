import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';
import './Main.css';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';
import ErrorText from '../ErrorText/ErrorText';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function Main({ loggedIn, onLogin, onRegister, loginState, infoToolActive, infoToolValues, handleInfoToolValues, handleExit, handleSaveArticle }) {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(loginState);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [articles, setArticles] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [isLoading, setLoading] = useState({ state: false, errorText: '' });

  function handleMobile(value) {
    setMobile(value);
  }

  function handleAuth(value) {
    setLoginPopupOpen(value);
    setMobile(!value);
  }

  function getArticles(value) {
    let cards = localStorage.getItem('articles');
    const articles = JSON.parse(cards);
    const newArticles = articles.map(item => {
      return { title: item.title, link: item.url, image: item.urlToImage, text: item.description, source: item.source.name, date: item.publishedAt }
    });
    setArticles(newArticles);
    setKeyWord(value);
  }

  function handleLoading(value) {
    setLoading(value);
  }

  function infoToolClose() {
    handleInfoToolValues({ active: false, path: '', text: '' });
  }

  function handleRedirect() {
    infoToolClose();
    setLoginPopupOpen(true);
  }

  function handleSaveArticleButton(card) {
    handleSaveArticle(card);
  }

  return (
    <section className="main-page">
      {infoToolActive && <InfoTooltip name={infoToolValues.name} text={infoToolValues.text} isOpen={infoToolValues.active} handleRedirect={handleRedirect} onClose={infoToolClose} />}
      <LoginPopup isOpen={isLoginPopupOpen} onClose={() => setLoginPopupOpen(false)} redirectLoginPopup={(value) => setRegisterPopupOpen(value)} onUpdateUser={(value) => onLogin(value)}></LoginPopup>
      <RegisterPopup isOpen={isRegisterPopupOpen} onClose={() => setRegisterPopupOpen(false)} redirectRegisterPopup={(value) => setLoginPopupOpen(value)} onUpdateUser={(value) => onRegister(value)}></RegisterPopup>
      {!isMobile && <Header color='white' hidden={isLoginPopupOpen || isRegisterPopupOpen} loggedIn={loggedIn} handleExit={() => handleExit()} handleAuth={value => setLoginPopupOpen(value)} handleMobile={value => handleMobile(value)} isMobile={isMobile} />}
      {isMobile && <Popup isOpen={isMobile} onClose={() => setMobile(false)}>
        <Header type='mobile' color='white' isMobile={isMobile} loggedIn={loggedIn} handleExit={() => handleExit()} handleAuth={value => handleAuth(value)} handleMobile={value => handleMobile(value)} />
      </Popup>}
      <SearchForm getArticles={(value) => getArticles(value)} setLoading={(value) => handleLoading(value)} />
      {isLoading.state && <Preloader />}
      {isLoading.errorText !== '' && <ErrorText text={isLoading.errorText} />}
      {(keyWord !== '' && !isLoading.state) && <NewsCardList cards={articles} keyWord={keyWord} loggedIn={loggedIn} handleSaveArticleButton={(value) => handleSaveArticleButton(value)} />}
      <About />
    </section>
  );
}

export default Main;