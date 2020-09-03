import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';
import './App.scss';
import Main from './Main';

const App = () => {
  return (
    <>
      <div>
        <Pages.MainPage />
      </div>
    </>
  );
};

export default App;
