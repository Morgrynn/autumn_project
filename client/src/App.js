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
import Case from './components/products/Case';
import Cooler from './components/products/Coolers';
const baseUrl = process.env.REACT_APP_BASEURL;

function App() {
  const [cpuData, setCpuData] = useState([]);
  const [gpuData, setGpuData] = useState([]);
  const [motherboardData, setMotherboardData] = useState([]);
  const [memoryData, setMemoryData] = useState([]);
  const [storageData, setStorageData] = useState([]);
  const [caseData, setCaseData] = useState([]);
  const [coolerData, setCoolerData] = useState([]);
  const [powerData, setPowerData] = useState([]);

  useEffect(() => {
    getProductCPU();
    getProductGPU();
    getProductMotherboard();
    getProductMemory();
    getProductStorage();
    getProductCase();
    getProductCooler();
    getProductPower();
  }, []);

  const getProductCPU = () => {
    axios
      .get(`${baseUrl}cpu`)
      .then((res) => {
        console.log('Cpu Data: ', res.data);
        setCpuData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductGPU = () => {
    axios
      .get(`${baseUrl}gpu`)
      .then((res) => {
        console.log('Gpu Data: ', res.data);
        setGpuData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductMotherboard = () => {
    axios
      .get(`${baseUrl}motherboards`)
      .then((res) => {
        console.log('MBoard Data: ', res.data);
        setMotherboardData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductMemory = () => {
    axios
      .get(`${baseUrl}memory`)
      .then((res) => {
        console.log('Memory Data: ', res.data);
        setMemoryData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductStorage = () => {
    axios
      .get(`${baseUrl}storage`)
      .then((res) => {
        console.log('Storage Data: ', res.data);
        setStorageData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductPower = () => {
    axios
      .get(`${baseUrl}power`)
      .then((res) => {
        console.log('Power Data: ', res.data);
        setPowerData(res.data);
      })
      .catch((error) => console.log(error));
  };

  // TODO Add a link to this page from footer - and make footer
  const getProductCase = () => {
    axios
      .get(`${baseUrl}cases`)
      .then((res) => {
        console.log('Cases Data: ', res.data);
        setCaseData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductCooler = () => {
    axios
      .get(`${baseUrl}cooler`)
      .then((res) => {
        console.log('Cooler Data: ', res.data);
        setCoolerData(res.data);
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
          )}></Route>
        <Route
          exact
          path='/motherboard'
          render={(routeProps) => (
            <Motherboard productData={motherboardData} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/gpu'
          render={(routeProps) => (
            <Gpu productData={gpuData} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/memory'
          render={(routeProps) => (
            <Memory productData={memoryData} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/storage'
          render={(routeProps) => (
            <Storage productData={storageData} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/cases'
          render={(routeProps) => (
            <Case productData={caseData} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/cooler'
          render={(routeProps) => (
            <Cooler productData={coolerData} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/power'
          render={(routeProps) => (
            <PowerSupply productData={powerData} {...routeProps} />
          )}></Route>
      </Switch>
    </div>
  );
}

export default App;
