import React, { useState } from 'react';
import { Dropdown, Container, Row, Col, Button } from 'react-bootstrap';
import './Main.css';
import Laptop from '../images/laptop.png';
import { Link } from 'react-router-dom';
import RegistrationModal from './Registration';
import ShoppingCartModal from './ShoppingCart';
import LoginModal from './Login';
import ProfileModal from './Profile';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Search from './Search';
import { FaLaptopCode } from 'react-icons/fa';

export default function Main({
  handleOnInputChange,
  clearSearch,
  value,
  onSubmitSearchForm,
  shoppingCart,
  addToShoppingCart,
}) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [showRegistration, setShowRegistration] = useState(false);
  const [showMain, setShowMain] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const handleClose = () => setShowRegistration(false);
  const handleShow = () => setShowRegistration(true);
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleProfileClose = () => setShowProfile(false);
  const handleProfileShow = () => setShowProfile(true);
  const handleShoppingCartClose = () => setShowShoppingCart(false);
  const handleShoppingCartShow = () => setShowShoppingCart(true);

  const handleNotificationsSuccess = (message) => {
    store.addNotification({
      title: 'Success!',
      message: message,
      type: 'success',
      container: 'top-right',
      insert: 'top',
      dismiss: {
        duration: 5000,
        showIcon: true,
      },
      width: 700,
    });
  };

  const handleNotificationsDanger = (message) => {
    store.addNotification({
      title: 'ERROR!',
      message: message,
      type: 'danger',
      container: 'top-right',
      insert: 'top',
      dismiss: {
        duration: 5000,
        showIcon: true,
      },
      width: 700,
    });
  };
  return (
    <div>
      <ReactNotification />

      <RegistrationModal
        handleClose={handleClose}
        handleShow={handleShow}
        showRegistration={showRegistration}
        setLoggedIn={setLoggedIn}
        handleNotificationsSuccess={handleNotificationsSuccess}
        handleNotificationsDanger={handleNotificationsDanger}
      />

      <LoginModal
        handleClose={handleLoginClose}
        handleShow={handleLoginShow}
        showRegistration={showLogin}
        setLoggedIn={setLoggedIn}
        handleNotificationsSuccess={handleNotificationsSuccess}
        handleNotificationsDanger={handleNotificationsDanger}
        setCurrentUser={setCurrentUser}
      />

      <ProfileModal
        handleClose={handleProfileClose}
        handleShow={handleProfileShow}
        showProfile={showProfile}
        currentUser={currentUser}
      />

      <ShoppingCartModal
        loggedIn={loggedIn}
        shoppingCart={shoppingCart}
        handleClose={handleShoppingCartClose}
        handleShow={handleShoppingCartShow}
        showShoppingCart={showShoppingCart}
        currentUser={currentUser}
        addToShoppingCart={addToShoppingCart}
      />

      <div className='main-header'>
        <Container>
          <Row>
            <Container>
              <Row>
                <Col>
                  <div className='mt-2' style={{ cursor: 'pointer' }}>
                    <h1 onClick={() => setShowMain(true)}>
                      <FaLaptopCode style={{ verticalAlign: '-10px' }} />
                      PC Pal
                    </h1>
                  </div>
                </Col>
                <Col>
                  {loggedIn ? (
                    <div className='float-right mt-2'>
                      <Dropdown className='d-inline'>
                        <Dropdown.Toggle
                          className='mr-3'
                          size='sm'
                          variant='secondary'
                          id='dropdown-basic'>
                          {currentUser.username}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleProfileShow()}>
                            <AccountBoxIcon className='mr-2' /> Profile
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => setLoggedIn(false)}>
                            {' '}
                            <PowerSettingsNewIcon className='mr-2' />
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <ShoppingCartIcon
                        className='d-inline'
                        onClick={() => handleShoppingCartShow()}
                      />
                      {shoppingCart.length ? (
                          <span
                              className='item-counter'
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleShoppingCartShow()}>
                            <span>{shoppingCart.length}</span>
                          </span>
                      ) : (
                          <span></span>
                      )}
                    </div>
                  ) : (
                    <div className='float-right mt-2'>
                      <Button
                        style={{ width: '100px' }}
                        size='sm'
                        variant='outline-secondary'
                        onClick={handleLoginShow}>
                        Login
                      </Button>
                      <Button
                        style={{ width: '100px' }}
                        className='ml-3'
                        size='sm'
                        variant='secondary'
                        onClick={handleShow}>
                        Register
                      </Button>
                      <div className='d-inline'>
                        <ShoppingCartIcon
                          className='d-inline ml-2'
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleShoppingCartShow()}
                        />
                        {shoppingCart.length ? (
                          <span
                            className='item-counter'
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleShoppingCartShow()}>
                            <span>{shoppingCart.length}</span>
                          </span>
                        ) : (
                          <span></span>
                        )}
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
              {showMain ? (
                <Row className='mainInfo'>
                  <Col xs={2}></Col>
                  <Col className='mt-5'>
                    <h2>UPGRADE!</h2>
                    <div className='shop-text'>
                      Get yourself a brand new PC <br /> at a great price
                    </div>
                    <Button
                      className='mt-2'
                      style={{ width: '155px' }}
                      size='md'
                      variant='secondary'>
                      Shop now
                    </Button>
                  </Col>
                  <Col className='p-1'>
                    <div className=' main-picture'>
                      <img className='laptop-pic' src={Laptop} alt='Logo' />
                    </div>
                  </Col>
                </Row>
              ) : null}
              <Row>
                <Col></Col>
                <Col xs={9}>
                  <div className='nav-category'>
                    <div className='nav-menu-item p-3 ml-3 nav-chosen-category'>
                      <Link
                        to='/'
                        onClick={() => {
                          setShowMain(false);
                          clearSearch();
                        }}>
                        Trending
                      </Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/cpu' onClick={() => setShowMain(false)}>
                        CPU
                      </Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link
                        to='/motherboards'
                        onClick={() => setShowMain(false)}>
                        Motherboards
                      </Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/gpu' onClick={() => setShowMain(false)}>
                        GPU
                      </Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/memory' onClick={() => setShowMain(false)}>
                        Memory
                      </Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/storage' onClick={() => setShowMain(false)}>
                        Storage
                      </Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/power' onClick={() => setShowMain(false)}>
                        Power supply
                      </Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/cooler' onClick={() => setShowMain(false)}>
                        Cooler
                      </Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/cases' onClick={() => setShowMain(false)}>
                        Case
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row className='mt-3 mb-3'>
                <Col></Col>
                <Search
                  handleOnInputChange={handleOnInputChange}
                  onSubmitSearchForm={onSubmitSearchForm}
                  value={value}
                />
                <Col></Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </div>
  );
}
