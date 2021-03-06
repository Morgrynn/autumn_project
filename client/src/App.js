import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cpu from './components/products/Cpu';
import Gpu from './components/products/Gpu';
import Trending from './components/Trending';
import SearchPage from './components/SearchPage';
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
import About from './components/About';
import Footer from './components/Footer';
import nextId from 'react-id-generator';
import Shopnow from './components/Shopnow';
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
  const [shoppingCart, addToShoppingCart] = React.useState([]);
  const [value, setValue] = useState('');
  const [productData, setProductData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [priceChecked, setPriceChecked] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  // * Router dom references
  const browserHistory = useHistory();
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
        // console.log('Cpu Data: ', res.data);
        setCpuData(res.data);
        setFilteredData(cpuData);
      })
      .catch((error) => console.log(error));
  };

  const getProductGPU = () => {
    axios
      .get(`${baseUrl}gpu`)
      .then((res) => {
        // console.log('Gpu Data: ', res.data);
        setGpuData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductMotherboard = () => {
    axios
      .get(`${baseUrl}motherboards`)
      .then((res) => {
        // console.log('MBoard Data: ', res.data);
        setMotherboardData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductMemory = () => {
    axios
      .get(`${baseUrl}memory`)
      .then((res) => {
        // console.log('Memory Data: ', res.data);
        setMemoryData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductStorage = () => {
    axios
      .get(`${baseUrl}storage`)
      .then((res) => {
        // console.log('Storage Data: ', res.data);
        setStorageData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductPower = () => {
    axios
      .get(`${baseUrl}power`)
      .then((res) => {
        // console.log('Power Data: ', res.data);
        setPowerData(res.data);
      })
      .catch((error) => console.log(error));
  };

  // TODO Add a link to these two pages from footer - and make footer
  const getProductCase = () => {
    axios
      .get(`${baseUrl}cases`)
      .then((res) => {
        // console.log('Cases Data: ', res.data);
        setCaseData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductCooler = () => {
    axios
      .get(`${baseUrl}cooler`)
      .then((res) => {
        // console.log('Cooler Data: ', res.data);
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
    addToShoppingCart([
      ...shoppingCart,
      {
        id: nextId(),
        image: item.image,
        price: item.price,
        name: item.name,
        qty: 0,
      },
    ]);
    console.log(shoppingCart);
  };

  // ------------------------------------------
  // Search functionality

  const handleOnInputChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmitSearchForm = async (e) => {
    e.preventDefault();
    // Multiple api calls to backend
    const cpuAPI = `${baseUrl}cpu/name/${value}`;
    const gpuAPI = `${baseUrl}gpu/name/${value}`;
    const mbAPI = `${baseUrl}motherboards/name/${value}`;
    const coolerAPI = `${baseUrl}cooler/name/${value}`;
    const caseAPI = `${baseUrl}cases/name/${value}`;
    const powerAPI = `${baseUrl}power/name/${value}`;
    const memoryAPI = `${baseUrl}memory/name/${value}`;
    const storageAPI = `${baseUrl}storage/name/${value}`;
    const getCpu = axios.get(cpuAPI);
    const getGpu = axios.get(gpuAPI);
    const getMb = axios.get(mbAPI);
    const getCooler = axios.get(coolerAPI);
    const getCase = axios.get(caseAPI);
    const getPower = axios.get(powerAPI);
    const getMemory = axios.get(memoryAPI);
    const getStorage = axios.get(storageAPI);

    // get all the api calls data and store in an array to access easier
    try {
      await axios
        .all([
          getCpu,
          getGpu,
          getMb,
          getCooler,
          getCase,
          getPower,
          getMemory,
          getStorage,
        ])
        .then(
          axios.spread((...allData) => {
            const allCpuNames = allData[0].data;
            const allGpuNames = allData[1].data;
            const allMbNames = allData[2].data;
            const allCoolerNames = allData[3].data;
            const allCaseNames = allData[4].data;
            const allPowerNames = allData[5].data;
            const allMemoryNames = allData[6].data;
            const allStorageNames = allData[7].data;

            const searchArr = [];
            searchArr.push(
              ...allCpuNames,
              ...allGpuNames,
              ...allMbNames,
              ...allCoolerNames,
              ...allCaseNames,
              ...allPowerNames,
              ...allMemoryNames,
              ...allStorageNames
            );

            browserHistory.push('/search-page');
            setProductData(searchArr);
          })
        );
    } catch (error) {
      console.error(error.message);
    }
  };

  const clearSearch = () => {
    // Temporary option to clear the searched fields
    setProductData([]);
  };

  // Checkbox filter functionality
  const toggleHandler = (event) => {
    const val = event.currentTarget.value;
    setChecked(event.currentTarget.checked);
    let data = [...cpuData];
    const filterItems = data.filter((item) => {
      const str = item.name;
      const sub = str.substr(0, 5);
      return sub.toLowerCase().includes(val);
    });
    if (!checked) {
      setFilteredData(filterItems);
      setChecked(false);
    }
  };

  //  Price filters
  const cpuPriceFilter = (event) => {
    const val = event.currentTarget.value;
    setPriceChecked(event.currentTarget.checked);
    let data = [...cpuData];
    const low = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    const high = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    low.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    high.sort((a, b) => {
      if (b.value > a.value) {
        return 1;
      }
      if (b.value < a.value) {
        return -1;
      }
      return 0;
    });

    const lowPrice = low.map((el) => {
      return data[el.index];
    });

    const highPrice = high.map((el) => {
      return data[el.index];
    });

    if (!priceChecked && val === 'low') {
      setFilteredData(lowPrice);
      setPriceChecked(false);
    } else if (!priceChecked && val === 'high') {
      setFilteredData(highPrice);
      setPriceChecked(false);
    }
  };

  const gpuPriceFilter = (event) => {
    const val = event.currentTarget.value;
    setPriceChecked(event.currentTarget.checked);
    let data = [...gpuData];
    const low = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    const high = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    low.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    high.sort((a, b) => {
      if (b.value > a.value) {
        return 1;
      }
      if (b.value < a.value) {
        return -1;
      }
      return 0;
    });

    const lowPrice = low.map((el) => {
      return data[el.index];
    });

    const highPrice = high.map((el) => {
      return data[el.index];
    });

    if (!priceChecked && val === 'low') {
      setGpuData(lowPrice);
      setPriceChecked(false);
    } else if (!priceChecked && val === 'high') {
      setGpuData(highPrice);
      setPriceChecked(false);
    }
  };

  const mbPriceFilter = (event) => {
    const val = event.currentTarget.value;
    setPriceChecked(event.currentTarget.checked);
    let data = [...motherboardData];
    const low = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    const high = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    low.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    high.sort((a, b) => {
      if (b.value > a.value) {
        return 1;
      }
      if (b.value < a.value) {
        return -1;
      }
      return 0;
    });

    const lowPrice = low.map((el) => {
      return data[el.index];
    });

    const highPrice = high.map((el) => {
      return data[el.index];
    });

    if (!priceChecked && val === 'low') {
      setMotherboardData(lowPrice);
      setPriceChecked(false);
    } else if (!priceChecked && val === 'high') {
      setMotherboardData(highPrice);
      setPriceChecked(false);
    }
  };

  const memoryPriceFilter = (event) => {
    const val = event.currentTarget.value;
    setPriceChecked(event.currentTarget.checked);
    let data = [...memoryData];
    const low = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    const high = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    low.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    high.sort((a, b) => {
      if (b.value > a.value) {
        return 1;
      }
      if (b.value < a.value) {
        return -1;
      }
      return 0;
    });

    const lowPrice = low.map((el) => {
      return data[el.index];
    });

    const highPrice = high.map((el) => {
      return data[el.index];
    });

    if (!priceChecked && val === 'low') {
      setMemoryData(lowPrice);
      setPriceChecked(false);
    } else if (!priceChecked && val === 'high') {
      setMemoryData(highPrice);
      setPriceChecked(false);
    }
  };

  const storagePriceFilter = (event) => {
    const val = event.currentTarget.value;
    setPriceChecked(event.currentTarget.checked);
    let data = [...storageData];
    const low = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    const high = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    low.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    high.sort((a, b) => {
      if (b.value > a.value) {
        return 1;
      }
      if (b.value < a.value) {
        return -1;
      }
      return 0;
    });

    const lowPrice = low.map((el) => {
      return data[el.index];
    });

    const highPrice = high.map((el) => {
      return data[el.index];
    });

    if (!priceChecked && val === 'low') {
      setStorageData(lowPrice);
      setPriceChecked(false);
    } else if (!priceChecked && val === 'high') {
      setStorageData(highPrice);
      setPriceChecked(false);
    }
  };

  const casesPriceFilter = (event) => {
    const val = event.currentTarget.value;
    setPriceChecked(event.currentTarget.checked);
    let data = [...caseData];
    const low = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    const high = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    low.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    high.sort((a, b) => {
      if (b.value > a.value) {
        return 1;
      }
      if (b.value < a.value) {
        return -1;
      }
      return 0;
    });

    const lowPrice = low.map((el) => {
      return data[el.index];
    });

    const highPrice = high.map((el) => {
      return data[el.index];
    });

    if (!priceChecked && val === 'low') {
      setCaseData(lowPrice);
      setPriceChecked(false);
    } else if (!priceChecked && val === 'high') {
      setCaseData(highPrice);
      setPriceChecked(false);
    }
  };

  const coolerPriceFilter = (event) => {
    const val = event.currentTarget.value;
    setPriceChecked(event.currentTarget.checked);
    let data = [...coolerData];
    const low = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    const high = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    low.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    high.sort((a, b) => {
      if (b.value > a.value) {
        return 1;
      }
      if (b.value < a.value) {
        return -1;
      }
      return 0;
    });

    const lowPrice = low.map((el) => {
      return data[el.index];
    });

    const highPrice = high.map((el) => {
      return data[el.index];
    });

    if (!priceChecked && val === 'low') {
      setCoolerData(lowPrice);
      setPriceChecked(false);
    } else if (!priceChecked && val === 'high') {
      setCoolerData(highPrice);
      setChecked(false);
    }
  };

  const powerPriceFilter = (event) => {
    const val = event.currentTarget.value;
    setPriceChecked(event.currentTarget.checked);
    let data = [...powerData];
    const low = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    const high = data.map((item, i) => {
      return { index: i, value: Number(item.price) };
    });
    low.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    high.sort((a, b) => {
      if (b.value > a.value) {
        return 1;
      }
      if (b.value < a.value) {
        return -1;
      }
      return 0;
    });

    const lowPrice = low.map((el) => {
      return data[el.index];
    });

    const highPrice = high.map((el) => {
      return data[el.index];
    });

    if (!priceChecked && val === 'low') {
      setPowerData(lowPrice);
      setPriceChecked(false);
    } else if (!priceChecked && val === 'high') {
      setPowerData(highPrice);
      setPriceChecked(false);
    }
  };

  const resetCpuData = () => {
    setFilteredData(cpuData);
  };

  return (
    <div className='App'>
      <Main
        shoppingCart={shoppingCart}
        addToShoppingCart={addToShoppingCart}
        value={value}
        handleOnInputChange={handleOnInputChange}
        onSubmitSearchForm={onSubmitSearchForm}
        clearSearch={clearSearch}
        resetCpuData={resetCpuData}
      />
      <Switch>
        <Route exact path='/'>
          <Trending
            cpuData={cpuData}
            gpuData={gpuData}
            motherboardData={motherboardData}
            memoryData={memoryData}
            baseUrl={baseUrl}
            location={location}
            onClick={handleProductClick}
          />
        </Route>
        <Route exact path='/search-page'>
          <SearchPage
            productData={productData}
            baseUrl={baseUrl}
            location={location}
            onClick={handleProductClick}
          />
        </Route>
        <Route
          exact
          path='/cpu/:id'
          render={(routeProps) => (
            <CpuProductPage
              item={item}
              baseUrl={baseUrl}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/motherboards/:id'
          render={(routeProps) => (
            <MboardProductPage
              item={item}
              baseUrl={baseUrl}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/gpu/:id'
          render={(routeProps) => (
            <GpuProductPage
              item={item}
              baseUrl={baseUrl}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/cooler/:id'
          render={(routeProps) => (
            <CoolerProductPage
              item={item}
              baseUrl={baseUrl}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/storage/:id'
          render={(routeProps) => (
            <StorageProductPage
              item={item}
              baseUrl={baseUrl}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/memory/:id'
          render={(routeProps) => (
            <MemoryProductPage
              item={item}
              baseUrl={baseUrl}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/power/:id'
          render={(routeProps) => (
            <PowerSupplyProductPage
              item={item}
              baseUrl={baseUrl}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/cases/:id'
          render={(routeProps) => (
            <CaseProductPage
              item={item}
              baseUrl={baseUrl}
              addItem={handleAddItem}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/cpu'
          location={location}
          render={(routeProps) => (
            <Cpu
              productData={cpuData}
              filteredData={filteredData}
              checked={checked}
              priceChecked={priceChecked}
              toggleHandler={toggleHandler}
              priceHandler={cpuPriceFilter}
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
              priceChecked={priceChecked}
              priceHandler={mbPriceFilter}
              {...routeProps}
            />
          )}></Route>
        <Route
          exact
          path='/gpu'
          render={(routeProps) => (
            <Gpu
              productData={gpuData}
              priceChecked={priceChecked}
              priceHandler={gpuPriceFilter}
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
              priceChecked={priceChecked}
              priceHandler={memoryPriceFilter}
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
              priceChecked={priceChecked}
              priceHandler={storagePriceFilter}
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
              priceChecked={priceChecked}
              priceHandler={casesPriceFilter}
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
              priceChecked={priceChecked}
              priceHandler={coolerPriceFilter}
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
              priceChecked={priceChecked}
              priceHandler={powerPriceFilter}
              {...routeProps}
            />
          )}></Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/shop-now'>
          <Shopnow />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
