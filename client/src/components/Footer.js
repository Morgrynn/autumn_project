import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer-container'>
      <Container>
        <Row>
          <Col xs={2} className='footer-logo'>
            <h3>
              <FaLaptopCode /> PC Pal
            </h3>
          </Col>
          <Col xs={3} className='footer-section'>
            <h4>Oulun myymälä</h4>
            <div className='footer-buisness'>
              <p>Kaakkuutie 1</p>
              <p>90410 Oulu</p>
              <div className='footer-times'>
                <span className='times-block'>
                  <span className='buisness-hours-date top'>ma - pe</span>
                  <span className='buisness-hours-time top'>9 - 21</span>
                </span>
                <span className='times-block'>
                  <span className='buisness-hours-date'>la</span>
                  <span className='buisness-hours-time'>9 - 19</span>
                </span>
                <span className='times-block'>
                  <span className='buisness-hours-date'>su</span>
                  <span className='buisness-hours-time'>11 - 19</span>
                </span>
              </div>
            </div>
          </Col>
          <Col xs={3} className='footer-section'>
            <h4>Asiakaspalvelu</h4>
            <p className="service" >Asiakaspalvelustamme löydät vastauksia usein kysyttyihin kysymyksiin ja saat apua, ohjeita ja neuvoja moneen eri tilanteeseen.</p>
          </Col>
          <Col xs={3} className='footer-section'>
            <h4>Information</h4>
            <ul className="footer-nav">
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className='footer-bottom'>
            <p>©2020 PC Pal, LLC. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
