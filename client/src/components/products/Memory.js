import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Image, Row, Col, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Memory({
  productData,
  baseUrl,
  onClick,
  location,
  addItem,
}) {
  return (
    <Container>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Speed</th>
            <th>Modules</th>
            <th>Price / GB</th>
            <th>Color</th>
            <th>First Word Latency</th>
            <th>CAS Latency</th>
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
                <td>{item.speed}</td>
                <td>{item.modules}</td>
                <td>{item.price_pergb}</td>
                <td>{item.color}</td>
                <td>{item.first_word_latency}</td>
                <td>{item.cas_latency}</td>
                <td style={{ display: 'flex', borderBottom: 'none' }}>
                  {createArray(5).map((n, i) => (
                    <Star key={i} selected={item.rating > i} />
                  ))}
                </td>
                <td>€{item.price}</td>
                <td>
                  <Button variant='outline-dark' onClick={() => addItem(item)}>
                    Add
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
