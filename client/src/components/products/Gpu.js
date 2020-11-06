import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Gpu() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col></Col>
        <Col xs={9}>
          <div className='main-title text-center'>
            Hello There! This is the GPU products page
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
