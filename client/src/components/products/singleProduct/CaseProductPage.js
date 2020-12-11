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

export default function CaseProductPage({ item, baseUrl, addItem }) {
  return (
    <Container style={{ marginTop: '10px' }}>
      <Row>
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
            <ListGroupItem>{item.type} Cores</ListGroupItem>
            <ListGroupItem>{item.side_panel_window}</ListGroupItem>
            <ListGroupItem>€{item.price}</ListGroupItem>
          </ListGroup>
          <AddToCart item={item} addItem={addItem} />
        </Col>
      </Row>
      <Row style={{ marginTop: '5px' }}>
        <Col>
          <Tabs defaultActiveKey="product" transition={false}>
            <Tab eventKey='product' title='Product Description'>
              <DescriptionList />
            </Tab>
            <Tab eventKey='ratings' title='Ratings & Reviews'>
              <UserRatings />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
