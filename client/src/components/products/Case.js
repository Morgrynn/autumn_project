import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Image, Row, Col, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Case({
  productData,
  baseUrl,
  onClick,
  location,
  addItem,
}) {
  return (
    <Container>
      <Table responsive  hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Color</th>
            <th>Power Supply</th>
            <th>Side Panel Window</th>
            <th>Internal Bays</th>
            <th>Rating</th>
            <th>Price</th>
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
                <td>{item.type}</td>
                <td>{item.color}</td>
                <td>{item.power_supply}</td>
                <td>{item.side_panel_window}</td>
                <td>{item.internal_bays}</td>
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
