import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Form, Image, Row, Col, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Cpu({
  productData,
  onClick,
  baseUrl,
  location,
  addItem,
}) {
  return (
    <Container>
      <Row>
        <Col xs={2}>
        <Form>
  {['checkbox', 'radio'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-default-${type}`}
      />
    </div>
  ))}
</Form>
        </Col>
        <Col xs={10}>
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Core Count</th>
                <th>Core Clock</th>
                <th>Boost Clock</th>
                <th>TDP</th>
                <th>Integrated Graphics</th>
                <th>SMT</th>
                <th>Rating</th>
                <th>Price</th>
                <th style={{ textAlign: 'center'}}><RiShoppingCartFill
              style={{ marginRight: '3px', marginBottom: '3px' }}
            /></th>
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
                    <td>{item.core_count}</td>
                    <td>{item.core_clock}</td>
                    <td>{item.boost_clock}</td>
                    <td>{item.tdp}</td>
                    <td>{item.integrated_graphics}</td>
                    <td>{item.smt}</td>
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
