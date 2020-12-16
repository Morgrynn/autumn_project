import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Table,
  Image,
  Row,
  Col,
  Button,
  ListGroup,
  ButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';
import '../../components/Button.css';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Cooler({
  productData,
  baseUrl,
  onClick,
  location,
  addItem,
  priceChecked,
  priceHandler,
}) {
  return (
    <Container responsive>
      <Row>
        <Col xs={2}>
          <ListGroup style={{ marginTop: '20px' }}>
            <h4
              style={{
                marginTop: '10px',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid black',
              }}>
              Price
            </h4>
            <ButtonGroup toggle vertical className='mb-2'>
              <ToggleButton
                className='price-button'
                type='checkbox'
                variant='secondary'
                checked={priceChecked}
                value='low'
                onChange={priceHandler}>
                Low
              </ToggleButton>
              <ToggleButton
                className='price-button'
                type='checkbox'
                variant='secondary'
                checked={priceChecked}
                value='high'
                onChange={priceHandler}>
                High
              </ToggleButton>
            </ButtonGroup>
          </ListGroup>
        </Col>
        <Col xs={10}>
          <Table responsive hover style={{ marginTop: '5px' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Fan RPM</th>
                <th>Noise Level</th>
                <th>Color</th>
                <th>Radiator Size</th>
                <th>Rating</th>
                <th>Price</th>
                <th style={{ textAlign: 'center' }}>
                  <RiShoppingCartFill
                    style={{ marginRight: '3px', marginBottom: '3px' }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {productData.map((item, index) => {
                return (
                  <tr key={index} onClick={() => onClick(item)}>
                    <td>
                      <Container>
                        <Link
                          to={`${location.pathname}/${item.id}`}
                          style={{ textDecoration: 'none', color: 'black' }}>
                          <Row>
                            <Col style={{ width: '171px' }}>
                              <Image
                                src={`${baseUrl}${item.image}`}
                                thumbnail
                                style={{ maxWidth: '75%' }}
                              />
                            </Col>
                            <Col>{item.name}</Col>
                          </Row>
                        </Link>
                      </Container>
                    </td>
                    <td>{item.fan_rpm}</td>
                    <td>{item.noise_level}</td>
                    <td>{item.color}</td>
                    <td>{item.radiator_size}</td>
                    <td style={{ display: 'flex', borderBottom: 'none' }}>
                      {createArray(5).map((n, i) => (
                        <Star key={i} selected={item.rating > i} />
                      ))}
                    </td>
                    <td>€{item.price}</td>
                    <td>
                      <Button
                        variant='outline-dark'
                        onClick={() => addItem(item)}>
                        Add
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
