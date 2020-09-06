import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';
import './App.scss';
import Main from './Main';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Pages.MainPage />} />
        {/* <Pages.MainPage /> */}
        <Route exact path="/make" render={() => <Pages.WritePage />} />
      </Switch>
    </>
  );
};

export default App;
