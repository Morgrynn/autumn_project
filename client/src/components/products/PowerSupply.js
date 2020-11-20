import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Image, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function PowerSupply({
  productData,
  baseUrl,
  onClick,
  location,
}) {
  return (
    <Container>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Form Factor</th>
            <th>Efficiency Rating</th>
            <th>Wattage</th>
            <th>Modular</th>
            <th>Color</th>
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
                        <Col>{item.power_supply_name}</Col>
                      </Row>
                    </Link>
                  </Container>
                </td>
                <td>{item.form_factor}</td>
                <td>{item.efficiency_rating}</td>
                <td>{item.wattage}</td>
                <td>{item.modular}</td>
                <td>{item.color}</td>
                <td style={{ display: 'flex', borderBottom: 'none' }}>
                  {createArray(5).map((n, i) => (
                    <Star key={i} selected={item.rating > i} />
                  ))}
                </td>
                <td>€{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
