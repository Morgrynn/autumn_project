import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Motherboard() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col></Col>
        <Col xs={9}>
          <div className='main-title text-center'>
            Hello There! This is the Motherboards products page
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
