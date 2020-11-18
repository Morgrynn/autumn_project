import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Main.css';
import Laptop from '../images/laptop.png';
import { Link } from 'react-router-dom';
import RegistrationModal from "./Registration";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LoginModal from "./Login";
import ReactNotification, {store} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'


export default function Main() {


  const [loggedIn, setLoggedIn] = React.useState(false)

  const [showRegistration, setShowRegistration] = useState(false);

  const [showMain, setShowMain] = useState(true);

  const handleClose = () => setShowRegistration(false);
  const handleShow = () => setShowRegistration(true);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleNotificationsSuccess = (message) => {
    store.addNotification({
      title: "Success!",
      message: message,
      type: "success",
      container: 'top-right',
      insert: 'top',
      dismiss: {
        duration: 5000,
        showIcon: true
      },
      width: 700
    })
  }

  const handleNotificationsDanger = (message) => {
    store.addNotification({
      title: "ERROR!",
      message: message,
      type: "danger",
      container: 'top-right',
      insert: 'top',
      dismiss: {
        duration: 5000,
        showIcon: true
      },
      width: 700
    })
  }
  return (
    <div>
      <ReactNotification />

      <RegistrationModal handleClose={handleClose} handleShow={handleShow}
                         showRegistration={showRegistration} setLoggedIn={setLoggedIn}
                         handleNotificationsSuccess={handleNotificationsSuccess}
                         handleNotificationsDanger={handleNotificationsDanger}
      />

      <LoginModal handleClose={handleLoginClose} handleShow={handleLoginShow}
                  showRegistration={showLogin} setLoggedIn={setLoggedIn}
                  handleNotificationsSuccess={handleNotificationsSuccess}
                  handleNotificationsDanger={handleNotificationsDanger}
      />

      <div className='main-header'>
        <Container>
          <Row>
            <Container>
              <Row>
                <Col>
                  <div className='mt-2' style={{cursor: "pointer"}}>
                    <h1 onClick={() => setShowMain(true)}>LOGO</h1>
                  </div>
                </Col>
                <Col>
                  {loggedIn
                      ? <div className='float-right mt-2'>
                        <Button
                            style={{width: '100px'}}
                            className='mr-3'
                            size='sm'
                            variant='secondary'
                            onClick={() => setLoggedIn(false)}>
                          Logout
                        </Button>
                        <ShoppingCartIcon />
                      </div>
                      :
                      <div className='float-right mt-2'>
                        <Button
                            style={{width: '100px'}}
                            size='sm'
                            variant='outline-secondary'
                            onClick={handleLoginShow}>
                          Login
                        </Button>
                        <Button
                            style={{width: '100px'}}
                            className='ml-3'
                            size='sm'
                            variant='secondary'
                            onClick={handleShow}>
                          Register
                        </Button>
                      </div>
                  }
                </Col>
              </Row>
              { showMain ?

                  <Row className='mainInfo'>
                    <Col xs={2}>

                    </Col>
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
                  </Row> : null }
              <Row>
                <Col>

                </Col>
                <Col xs={9}>
                  <div className='nav-category'>
                    <div className='nav-menu-item p-3 ml-3 nav-chosen-category'>
                      <Link to='/' onClick={() => setShowMain(false)}>Trending</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/cpu' onClick={() => setShowMain(false)}>CPU</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/motherboard' onClick={() => setShowMain(false)}>Motherboards</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/gpu' onClick={() => setShowMain(false)}>GPU</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/memory' onClick={() => setShowMain(false)}>Memory</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/storage' onClick={() => setShowMain(false)}>Storage</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/power' onClick={() => setShowMain(false)}>Power supply</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/cooler' onClick={() => setShowMain(false)}>Cooler</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/cases' onClick={() => setShowMain(false)}>Case</Link>
                    </div>
                  </div>
                </Col>
                <Col>

                </Col>
              </Row>
              <Row className='mt-3 mb-3'>
                <Col>

                </Col>
                <Col xs={9}>
                  <div className='nav-menu'>

                  </div>
                </Col>
                <Col>

                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </div>
  );
}
  