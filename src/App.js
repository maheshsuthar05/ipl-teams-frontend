import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/home.js';
import AddPlayer from './Components/addPlayer.js';
import PageNotFound from './Components/PageNotFound.js';
import Player from './Components/player.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/addplayer' component={AddPlayer} />
        <Route path='/player/:jersey' component={Player} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
