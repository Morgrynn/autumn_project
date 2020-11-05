import React from 'react';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? 'yellow' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Cpu({ productData }) {
  return (
    <Container className='mt-5'>
      <Row>
        <Col></Col>
        <Col xs={9}>
          <div className='main-title text-center'>
            Hello There! This is the CPU products page
            <CardGroup>
              {productData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    style={{ marginRight: '3px', marginLeft: '3px' }}>
                    <Card.Img variant='top' src='holder.js/60px120' />
                    <Card.Body>
                      <Card.Title>{item.cpu_name}</Card.Title>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        Core Count {item.core_count}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        Core Clock {item.core_clock}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        Boost Clock {item.boost_clock}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        TDP {item.tdp}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        Integrated Graphics {item.integrated_graphics}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        smt {item.smt}
                      </Card.Text>
                      <Card.Text style={{ marginBottom: '0.8rem' }}>
                        Price €{item.price}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      style={{ backgroundColor: 'rgba(3, 3, 3, 0.35)' }}>
                      <small className='text-muted'>
                        <>
                          {createArray(5).map((n, i) => (
                            <Star key={i} selected={item.rating > i} />
                          ))}
                          <p style={{ color: 'hsl(209.7, 92.7%, 21.4%)' }}>
                            {item.rating} of {5} stars
                          </p>
                        </>
                      </small>
                    </Card.Footer>
                  </Card>
                );
              })}
            </CardGroup>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
