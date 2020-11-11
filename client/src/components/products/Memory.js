import React from 'react';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
const baseUrl = process.env.REACT_APP_BASEURL;

const Star = ({ selected = false }) => (
  <FaStar color={selected ? 'yellow' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Memory({ productData }) {
  return (
    <Container className='mt-5'>
      <Row>
        <Col></Col>
        <Col xs={9}>
          <div className='main-title text-center'>
            <CardGroup>
              {productData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    style={{ marginRight: '3px', marginLeft: '3px' }}>
                    <Card.Img
                      variant='top'
                      src={`${baseUrl}${item.image}`}
                      alt={item.memory_name}
                    />
                    <Card.Body>
                      <Card.Title>{item.memory_name}</Card.Title>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        Speed {item.speed}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        Modules {item.modules}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        Price / GB {item.price_pergb}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        Color {item.color}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        First Word Latency {item.first_word_latency}
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: '0.8rem', fontSize: '0.8em' }}>
                        CAS Latency {item.cas_latency}
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
