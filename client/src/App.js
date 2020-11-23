import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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
import CpuProductPage from './components/products/singleProduct/CpuProductPage';
import MboardProductPage from './components/products/singleProduct/MboardProductPage';
import GpuProductPage from './components/products/singleProduct/GpuProductPage';
import CoolerProductPage from './components/products/singleProduct/CoolerProductPage';
import StorageProductPage from './components/products/singleProduct/StorageProductPage';
import MemoryProductPage from './components/products/singleProduct/MemoryProductPage';
import PowerSupplyProductPage from './components/products/singleProduct/PowerSupplyProductPage';
import CaseProductPage from './components/products/singleProduct/CaseProductPage';
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
  const [item, setItem] = useState([]);

  // * Router dom references
  const history = useHistory();
  const location = useLocation();

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

  // ------------------------------------------
  // Product calls from API

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

  // TODO Add a link to these two pages from footer - and make footer
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

  // ------------------------------------------
  // Click on individual product

  const handleProductClick = (item) => {
    // console.log(item);
    setItem(item);
  };

  // Add to Cart button
  // TODO this needs to be implemented but is linked to all products
  // only functionality needed here
  const handleAddItem = (item) => {
    console.log('Added to cart', item);
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
          path='/cpu/:id'
          render={(routeProps) => (
            <CpuProductPage item={item} baseUrl={baseUrl} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/motherboards/:id'
          render={(routeProps) => (
            <MboardProductPage item={item} baseUrl={baseUrl} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/gpu/:id'
          render={(routeProps) => (
            <GpuProductPage item={item} baseUrl={baseUrl} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/cooler/:id'
          render={(routeProps) => (
            <CoolerProductPage item={item} baseUrl={baseUrl} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/storage/:id'
          render={(routeProps) => (
            <StorageProductPage item={item} baseUrl={baseUrl} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/memory/:id'
          render={(routeProps) => (
            <MemoryProductPage item={item} baseUrl={baseUrl} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/power/:id'
          render={(routeProps) => (
            <PowerSupplyProductPage
              item={item}
              baseUrl={baseUrl}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/cases/:id'
          render={(routeProps) => (
            <CaseProductPage item={item} baseUrl={baseUrl} {...routeProps} />
          )}></Route>
        <Route
          exact
          path='/cpu'
          location={location}
          render={(routeProps) => (
            <Cpu
              productData={cpuData}
              baseUrl={baseUrl}
              onClick={handleProductClick}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/motherboards'
          location={location}
          render={(routeProps) => (
            <Motherboard
              productData={motherboardData}
              onClick={handleProductClick}
              addItem={handleAddItem}
              baseUrl={baseUrl}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/gpu'
          render={(routeProps) => (
            <Gpu
              productData={gpuData}
              baseUrl={baseUrl}
              onClick={handleProductClick}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/memory'
          render={(routeProps) => (
            <Memory
              productData={memoryData}
              baseUrl={baseUrl}
              onClick={handleProductClick}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/storage'
          render={(routeProps) => (
            <Storage
              productData={storageData}
              baseUrl={baseUrl}
              onClick={handleProductClick}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/cases'
          render={(routeProps) => (
            <Case
              productData={caseData}
              baseUrl={baseUrl}
              onClick={handleProductClick}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/cooler'
          render={(routeProps) => (
            <Cooler
              productData={coolerData}
              baseUrl={baseUrl}
              onClick={handleProductClick}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/power'
          render={(routeProps) => (
            <PowerSupply
              productData={powerData}
              baseUrl={baseUrl}
              onClick={handleProductClick}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
      </Switch>
    </div>
  );
}

export default App;
