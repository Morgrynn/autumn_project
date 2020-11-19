import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Image, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Storage({ productData, baseUrl, onClick, location }) {
  return (
    <Container>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Price / GB</th>
            <th>Type</th>
            <th>Cache</th>
            <th>Form Factor</th>
            <th>Interface</th>
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
                      <Col>{item.storage_name}</Col>
                    </Row>
                    </Link>
                  </Container>
                </td>
                <td>{item.capacity}</td>
                <td>{item.price_pergb}</td>
                <td>{item.type}</td>
                <td>{item.cache}</td>
                <td>{item.form_factor}</td>
                <td>{item.interface}</td>
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
