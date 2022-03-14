import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import walletPage from '../pages/Wallet';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Login /> } />
      <Route path="/carteira" component={ walletPage } />
    </Switch>
  );
}
