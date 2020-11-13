import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';

export default function ProductsPage({ item, baseUrl }) {
  return (
    <Container>
      <Card>
        <Card.Header as='h5'>
          <div className='text-muted'>PRODUCT DETAIL</div>
          <Card.Title>
            {item.cpu_name} {item.integrated_graphics}
          </Card.Title>
        </Card.Header>
        <Card.Img
          variant='top'
          src={`${baseUrl}${item.image}`}
          alt={item.cpu_name}
        />
        <Card.Body>
          <Card.Text>
            <div>
              <strong>Core Clock:</strong> {item.core_clock}
            </div>
            <div>
              <strong>Boost Clock:</strong> {item.boost_clock}
            </div>
            <div>
              <strong>TDP:</strong> {item.tdp}
            </div>
            <div>
              <strong>SMT:</strong> {item.smt}
            </div>
            <div>
              <strong>Integrated Graphics:</strong> {item.integrated_graphics}
            </div>
          </Card.Text>
          <Row>
            <Col xs={2}>
              <Button variant='info'>Back</Button>
            </Col>
            <Col xs={6}></Col>
            <Col>
              <Button variant='success'>Buy</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
