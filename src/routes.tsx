import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Tutorial from './pages/Tutorial';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/tutorial" exact component={Tutorial} />
      </Switch>
    </BrowserRouter>
  )
}