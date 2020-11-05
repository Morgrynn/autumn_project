import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cpu from './components/products/Cpu';
import Gpu from './components/products/Gpu';
import Trending from './components/Trending';
import Motherboard from './components/products/Motherboard';
import Memory from './components/products/Memory';
import Storage from './components/products/Storage';
import PowerSupply from './components/products/PowerSupply';

function App() {
  return (
    <div className='App'>
      <Main />
      <Switch>
        <Route exact path='/'>
          <Trending />
        </Route>
        <Route exact path='/cpu'>
          <Cpu />
        </Route>
        <Route exact path='/motherboard'>
          <Motherboard />
        </Route>
        <Route exact path='/gpu'>
          <Gpu />
        </Route>
        <Route exact path='/memory'>
          <Memory />
        </Route>
        <Route exact path='/storage'>
          <Storage />
        </Route>
        <Route exact path='/power-supply'>
          <PowerSupply />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
