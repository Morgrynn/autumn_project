import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={9}>
          <div className='header-wrapper'>About</div>
          <div className='section'>
            <div className='subtitle'>
              <h2>PC Pal. Build Your PC. Compare And Buy Parts.</h2>
            </div>
            <p>
              PC Pal provides computer part selection, compatibility, and
              pricing guidance for do-it-yourself computer builders. Assemble
              your virtual part lists with PCPartPicker and we'll provide
              compatibility guidance with up-to-date pricing from dozens of the
              most popular online retailers. We make it easy to share your part
              list with others, and our community forums provide a great place
              to discuss ideas and solicit feedback.
            </p>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
