import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Image, Row, Col, Button} from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Motherboard({ productData, onClick, baseUrl, location, addItem}) {
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
