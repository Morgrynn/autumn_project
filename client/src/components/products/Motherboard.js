import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Image, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Motherboard({ productData, onClick, baseUrl, location }) {
  return (
    <Container>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Socket / CPU</th>
            <th>Form Factor</th>
            <th>Memory Max</th>
            <th>Memory Slots</th>
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
                        <Col>{item.motherboards_name}</Col>
                      </Row>
                      </Link>
                    </Container>
                  </td>
                  <td>{item.socket_cpu}</td>
                  <td>{item.form_factor}</td>
                  <td>{item.memory_max}</td>
                  <td>{item.memory_slots}</td>
                  <td>{item.color}</td>
                  <td style={{ display: 'flex', border: 'none' }}>
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
