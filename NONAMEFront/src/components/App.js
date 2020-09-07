import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';
import './App.scss';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Pages.MainPage />} />
        <Route exact path="/make" render={() => <Pages.WritePage />} />
        {/* <Route exact path="/login" render={() => <Pages.LoginPage />} /> */}
      </Switch>
    </>
  );
};

export default App;
