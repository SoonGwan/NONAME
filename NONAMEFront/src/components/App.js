import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';
import { GlobalStyles } from './App.jsx';
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" render={() => <Pages.MainPage />} />
        <Route exact path="/myTeam" render={() => <Pages.MyTeamPage />} />
        <Route exact path="/make" render={() => <Pages.WritePage />} />
        {/* <Route exact path="/login" render={() => <Pages.LoginPage />} /> */}
      </Switch>
    </>
  );
};

export default App;
