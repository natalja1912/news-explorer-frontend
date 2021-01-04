import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  return (
    <div className="page">
      <main className="content">
        <Switch>
          <Route path="/saved-news">
            <SavedNews loggedIn={true} />
          </Route>
          <Route exact path="/">
            <Main loggedIn={false} />  
          </Route>
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;
