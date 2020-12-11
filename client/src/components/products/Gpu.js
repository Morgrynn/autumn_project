import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Image, Row, Col, Button} from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Gpu({ productData, onClick, baseUrl, location, addItem }) {
  return (
    <Container>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Chipset</th>
            <th>Memory</th>
            <th>Core Clock</th>
            <th>Boost Clock</th>
            <th>Color</th>
            <th>Length</th>
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
              <tr key={index}  onClick={() => onClick(item)}>
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
                <td>{item.chipset}</td>
                <td>{item.memory}</td>
                <td>{item.core_clock}</td>
                <td>{item.boost_clock}</td>
                <td>{item.color}</td>
                <td>{item.length}</td>
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
