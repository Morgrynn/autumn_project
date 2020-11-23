import React from 'react';
import {
  Container,
  Card,
  ListGroup,
  Button,
  Image,
  Row,
  Col,
  ListGroupItem,
} from 'react-bootstrap';

export default function MboardProductPage({ item, baseUrl}) {
  return (
    <Container>
      <Row>
      <Col md={{ span: 6, offset: 4}}>
      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Title style={{ textAlign: 'center' }}>{item.name}</Card.Title>
        <Card.Img variant='top' src={`${baseUrl}${item.image}`} />
        <ListGroup className="list-group-flush">
            <ListGroupItem>{item.socket_cpu}</ListGroupItem>
            <ListGroupItem>{item.form_factor} {item.memory_max}</ListGroupItem>
            <ListGroupItem>€{item.price}</ListGroupItem>
        </ListGroup>
      </Card>
      </Col>
    </Row>
    </Container>
  );
}
