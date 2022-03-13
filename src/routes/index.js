import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loginPage from '../pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ loginPage } />
      </Switch>
    </BrowserRouter>
  );
}
