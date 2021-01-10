import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import * as auth from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState({ loggedIn: false, userName: '' });
  const [infoToolValues, setInfoToolValues] = useState({ active: false, name: '', text: '' });
  const [infoToolActive, setInfoToolActive] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent().then((res) => {
        console.log(res);
        if (res) {
          setLoggedIn({ loggedIn: true, userName: 'res.data.name' });
        }
        else localStorage.removeItem('jwt');
      })
        .catch(() => {
          console.log(`Пользователь не зарегистрирован в системе`);
        })
    }
  }, [])

  function handleRegister(user) {
    setInfoToolActive(true);
    auth.register(user.password, user.email, user.name)
      .then((data) => {
        if (data) {
          setInfoToolValues({ active: true, name: 'success', text: 'Пользователь успешно зарегистрирован!' });
        }
        else {
          setInfoToolValues({ active: true, name: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.' });
        }
      })
      .catch(err => {
        setInfoToolValues({ active: true, name: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.' });
        console.log(err)
      });
  }

  function handleLogin(user) {
    auth.authorize(user.password, user.email)
      .then((data) => {
        if (data) {
          localStorage.setItem('jwt', data.token);
          console.log(data);
          setLoggedIn({ loggedIn: true, userName: user.name });
        }
        if (!data) {
          console.log('Произошла ошибка');
          setInfoToolValues({ active: true, name: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.' });
        }
        else return;
      })
      .catch(err => {
        setInfoToolValues({ active: true, name: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.' });
        console.log(err);
      });
  }

  function handleExit() {
    localStorage.removeItem('jwt');
    setLoggedIn({ loggedIn: false, email: '' });
    history.push('/');
  }

  return (
    <div className="page">
      <main className="content">
        <Switch>
          <ProtectedRoute path="/saved-news" handleExit={handleExit} loggedIn={loggedIn.loggedIn} component={SavedNews} user={loggedIn.email} />
          <Route exact path="/">
            <Main handleExit={handleExit} infoToolActive={infoToolActive} infoToolValues={infoToolValues} handleInfoToolValues={(data) => setInfoToolValues(data)} loggedIn={loggedIn.loggedIn} onLogin={(user) => handleLogin(user)} onRegister={(user) => handleRegister(user)} />
          </Route>
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;
