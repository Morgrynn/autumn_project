import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Main.css';
import Laptop from '../images/laptop.png';
import { Link } from 'react-router-dom';
import RegistrationModal from "./Registration";
import LoginModal from "./Login";

export default function Main() {


  const [showRegistration, setShowRegistration] = useState(false);

  const handleClose = () => setShowRegistration(false);
  const handleShow = () => setShowRegistration(true);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  return (
    <div>
      <RegistrationModal handleClose={handleClose} handleShow={handleShow} showRegistration={showRegistration}/>
      <LoginModal handleClose={handleLoginClose} handleShow={handleLoginShow} showRegistration={showLogin} />
      <div className='main-header'>
        <Container>
          <Row>
            <Container>
              <Row>
                <Col>
                  <div className='mt-2'>
                    <h1>LOGO</h1>
                  </div>
                </Col>
                <Col>
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
                  </div>
                </Col>
              </Row>
              <Row>
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
              </Row>
              <Row>
                <Col>

                </Col>
                <Col xs={9}>
                  <div className='nav-category'>
                    <div className='nav-menu-item p-3 ml-3 nav-chosen-category'>
                      <Link to='/'>Trending</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/cpu'>CPU</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/motherboard'>Motherboards</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/gpu'>GPU</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/memory'>Memory</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/storage'>Storage</Link>
                    </div>
                    <div className='nav-menu-item p-3 ml-2'>
                      <Link to='/power-supply'>Power supply</Link>
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
  