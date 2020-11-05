import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import './App.css';
import Cpu from './components/products/Cpu';
import Cooler from './components/products/Cooler';
import Home from './components/Home';
import Motherboard from './components/products/Motherboard';
import Memory from './components/products/Memory';
import Storage from './components/products/Storage';
import PowerSupply from './components/products/PowerSupply';
import Case from './components/products/Case';

function App() {
  return (
    <div className='App'>
      <Header />
      <Menu />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/cpu'>
          <Cpu />
        </Route>
        <Route exact path='/cooler'>
          <Cooler />
        </Route>
        <Route exact path='/motherboard'>
          <Motherboard />
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
        <Route exact path='/case'>
          <Case />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
