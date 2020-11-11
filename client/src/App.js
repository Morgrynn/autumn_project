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
import axios from 'axios';

function App() {
  const [cpuData, setCpuData] = useState([]);

  useEffect(() => {
    getProductCPU();
  }, []);

  const getProductCPU = () => {
    axios
      .get(`http://localhost:3001/cpu`)
      .then((res) => {
        console.log(res.data);
        setCpuData(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='App'>
      <Main />
      <Switch>
        <Route exact path='/'>
          <Trending />
        </Route>
        <Route
          exact
          path='/cpu'
          render={(routeProps) => (
            <Cpu productData={cpuData} {...routeProps} />
          )}>

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
