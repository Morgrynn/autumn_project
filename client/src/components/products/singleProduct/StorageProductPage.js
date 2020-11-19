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

export default function StorageProductPage({ item, baseUrl }) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <Card border='secondary' style={{ width: '18rem' }}>
            <Card.Title style={{ textAlign: 'center' }}>
              {item.storage_name}
            </Card.Title>
            <Card.Img variant='top' src={`${baseUrl}${item.image}`} />
            <ListGroup className='list-group-flush'>
              <ListGroupItem>{item.capacity}</ListGroupItem>
              <ListGroupItem>{item.type}</ListGroupItem>
              <ListGroupItem>€{item.price}</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
