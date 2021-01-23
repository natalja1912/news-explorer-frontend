import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as api from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState({ loggedIn: false, userName: '' });
  const [infoToolValues, setInfoToolValues] = useState({ active: false, name: '', text: '' });
  const [infoToolActive, setInfoToolActive] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const history = useHistory();

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getArticles()])
      .then(([user, articles]) => {
        if (user) {
          setLoggedIn({ loggedIn: true, userName: user.data.name });
        }
        if (articles) {
          setSavedArticles(articles.data);
        }
      })
      .catch(() => {
        console.log(`Пользователь не зарегистрирован в системе`);
      })
  }, [])

  function errorPopup() {
    setInfoToolValues({ active: true, name: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.' });
  }

  function updateArticles() {
    return api.getArticles()
      .then((articles) => {
        if (articles) {
          setSavedArticles(articles.data);
        }
      })
      .catch((err) => console.log(err))
  }

  function handleRegister(user) {
    api.register(user.password, user.email, user.name)
      .then((data) => {
        if (data) {
          setInfoToolValues({ active: true, name: 'success', text: 'Пользователь успешно зарегистрирован!' });
        }
        else {
          errorPopup();
        }
      })
      .catch(err => {
        errorPopup();
        console.log(err);
      });
    setInfoToolActive(true);
  }

  function handleLogin(user) {
    api.authorize(user.password, user.email)
      .then((user) => {
        setLoggedIn({ loggedIn: true, userName: user.name });
      })
      .then(() => {
        updateArticles();
      })
      .catch(err => {
        errorPopup();
        console.log(err);
      });
    setInfoToolActive(true);
  }

  function handleSaveArticle(item) {
    api.createArticle(item)
      .then(() => {
        console.log("Статья сохранена");
      })
      .then(() => {
        updateArticles();
      })
      .catch(err => {
        setInfoToolValues({ active: true, name: 'card-conflict', text: "Карточка уже была сохранена" });
        console.log(err);
      });
  }

  function handleDeleteArticle(item) {
    const id = item._id;
    api.deleteArticle(id)
      .then(() => {
        console.log("Статья удалена");
      })
      .then(() => {
        setSavedArticles(prev => {
          return prev.filter((item) => item._id !== id)
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleExit() {
    localStorage.clear();
    api.logout()
      .then(() => console.log("Пользователь разлогинился"))
      .catch((err) => console.log(err));
    setLoggedIn({ loggedIn: false, userName: '' });
    history.push('/');
  }

  return (
    <div className="page">
      <main className="content">
        <CurrentUserContext.Provider value={loggedIn.userName}>
          <Switch>
            <ProtectedRoute path="/saved-news" handleExit={handleExit} loggedIn={loggedIn.loggedIn} component={SavedNews} user={loggedIn.email} savedArticles={savedArticles} handleDeleteArticle={(value) => handleDeleteArticle(value)} />
            <Route exact path="/">
              <Main handleExit={handleExit} infoToolActive={infoToolActive} infoToolValues={infoToolValues} handleInfoToolValues={(data) => setInfoToolValues(data)} loggedIn={loggedIn.loggedIn} onLogin={(user) => handleLogin(user)} onRegister={(user) => handleRegister(user)} handleSaveArticle={(value) => handleSaveArticle(value)} />
            </Route>
          </Switch>
          <Footer />
        </CurrentUserContext.Provider>
      </main>
    </div>
  );
}

export default App;
