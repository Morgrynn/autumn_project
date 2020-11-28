import React, { useState } from 'react';
import {
  Container,
  ListGroup,
  Image,
  Row,
  Col,
  ListGroupItem,
  Tabs,
  Tab,
} from 'react-bootstrap';
import AddToCart from './AddToCart';
import DescriptionList from './DescriptionList';
import UserRatings from './UserRatings';

export default function MemoryProductPage({ item, baseUrl, addItem }) {
  const [key, setKey] = useState('product');
  return (
    <Container style={{ marginTop: '10px' }}>
      <Row>
<<<<<<< HEAD
        <Col md={{ span: 6, offset: 4 }}>
          <Card border='secondary' style={{ width: '18rem' }}>
            <Card.Title style={{ textAlign: 'center' }}>
              {item.name}
            </Card.Title>
            <Card.Img variant='top' src={`${baseUrl}${item.image}`} />
            <ListGroup className='list-group-flush'>
              <ListGroupItem>{item.speed}</ListGroupItem>
              <ListGroupItem>{item.modules}</ListGroupItem>
              <ListGroupItem>€{item.price}</ListGroupItem>
            </ListGroup>
          </Card>
=======
        <Col xs={6} md={4}>
          <div>
            <Image fluid src={`${baseUrl}${item.image}`} />
          </div>
        </Col>
        <Col xs={12} md={8}>
          <ListGroup className='list-group-flush'>
            <div>
              <ListGroupItem style={{ textAlign: 'center' }}>
                {item.name}
              </ListGroupItem>
            </div>
            <ListGroupItem>{item.speed} Cores</ListGroupItem>
            <ListGroupItem>{item.modules}</ListGroupItem>
            <ListGroupItem>€{item.price}</ListGroupItem>
          </ListGroup>
          <AddToCart item={item} addItem={addItem} />
        </Col>
      </Row>
      <Row style={{ marginTop: '5px' }}>
        <Col>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey='product' title='Product Description'>
              <DescriptionList />
            </Tab>
            <Tab eventKey='ratings' title='Ratings & Reviews'>
              <UserRatings />
            </Tab>
          </Tabs>
>>>>>>> feature/productinfo
        </Col>
      </Row>
    </Container>
  );
}
