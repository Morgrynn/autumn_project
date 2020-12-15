import React from 'react';
// import { Link } from 'react-router-dom';
import One from '../images/banner/one.png';
import Two from '../images/banner/two.png';
import Three from '../images/banner/three.png';
import Four from '../images/banner/four.png';
import Setup from '../images/display/setup.jpg';
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  CardGroup,
  Image,
} from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './Trending.css';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Trending({
  cpuData,
  gpuData,
  motherboardData,
  memoryData,
  baseUrl,
}) {
  return (
    <Container className='mt-5'>
      {/* Top Banner Carousel */}
      <Row>
        <Col></Col>
        <Col xs={9}>
          <Carousel interval={3500}>
            <Carousel.Item style={{ height: '150px' }}>
              <img
                className='d-block w-100'
                style={{ minHeight: '150px' }}
                src={One}
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: '150px' }}>
              <img
                className='d-block w-100'
                style={{ minHeight: '150px' }}
                src={Two}
                alt='Third slide'
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: '150px' }}>
              <img
                className='d-block w-100'
                style={{ minHeight: '150px' }}
                src={Three}
                alt='Third slide'
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: '150px' }}>
              <img
                className='d-block w-100'
                style={{ minHeight: '150px' }}
                src={Four}
                alt='Fourth slide'
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col></Col>
      </Row>
      {/* Sale Clearance items */}
      <Row style={{ marginTop: '15px' }}>
        <Col></Col>
        <Col xs={9} className='image-container'>
          <Image fluid src={Setup} />
          <div className='centered'>
            Gaming Setups of 2020 - Building the Ultimate Gaming PC
          </div>
        </Col>
        <Col></Col>
      </Row>
      {/* Bottom Products Carousel */}
      <Row style={{ marginTop: '10px' }}>
        <Col></Col>
        <Col xs={9}>
          <Carousel interval={5500} pause='hover'>
            <Carousel.Item>
              <CardGroup>
                {cpuData.slice(1, 4).map((item, index) => {
                  return (
                    <Card
                      style={{ width: '18rem' }}
                      key={index}
                      border='primary'>
                      <Card.Img
                        height='168px'
                        variant='top'
                        style={{ maxHeight: '270px' }}
                        src={`${baseUrl}${item.image}`}
                      />
                      <Card.Body>
                        <div height='168px'>
                          <Card.Text>
                            {createArray(5).map((n, i) => (
                              <Star key={i} selected={item.rating > i} />
                            ))}
                          </Card.Text>
                          <Card.Title>{item.name}</Card.Title>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <Card.Title>€{item.price}</Card.Title>
                        <Card.Text
                          style={{
                            position: 'relative',
                            background: '#cc4e00',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '11px',
                            textAlign: 'left',
                            paddingLeft: '3px',
                            paddingRight: '3px',
                          }}>
                          Save: 10%
                        </Card.Text>
                        <small className='text-muted'>Free Shipping</small>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
              <CardGroup>
                {gpuData.slice(1, 4).map((item, index) => {
                  return (
                    <Card
                      style={{ width: '18rem' }}
                      key={index}
                      border='secondary'>
                      <Card.Img
                        height='168px'
                        variant='top'
                        style={{ maxHeight: '270px' }}
                        src={`${baseUrl}${item.image}`}
                      />
                      <Card.Body>
                        <div height='168px'>
                          <Card.Text>
                            {createArray(5).map((n, i) => (
                              <Star key={i} selected={item.rating > i} />
                            ))}
                          </Card.Text>
                          <Card.Title>{item.name}</Card.Title>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <Card.Title>€{item.price}</Card.Title>
                        <Card.Text
                          style={{
                            position: 'relative',
                            background: '#cc4e00',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '11px',
                            textAlign: 'left',
                            paddingLeft: '3px',
                            paddingRight: '3px',
                          }}>
                          Save: 10%
                        </Card.Text>
                        <small className='text-muted'>Free Shipping</small>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
              <CardGroup>
                {motherboardData.slice(1, 4).map((item, index) => {
                  return (
                    <Card
                      style={{ width: '18rem' }}
                      key={index}
                      border='success'>
                      <Card.Img
                        height='168px'
                        variant='top'
                        style={{ maxHeight: '270px' }}
                        src={`${baseUrl}${item.image}`}
                      />
                      <Card.Body>
                        <div height='168px'>
                          <Card.Text>
                            {createArray(5).map((n, i) => (
                              <Star key={i} selected={item.rating > i} />
                            ))}
                          </Card.Text>
                          <Card.Title>{item.name}</Card.Title>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <Card.Title>€{item.price}</Card.Title>
                        <Card.Text
                          style={{
                            position: 'relative',
                            background: '#cc4e00',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '11px',
                            textAlign: 'left',
                            paddingLeft: '3px',
                            paddingRight: '3px',
                          }}>
                          Save: 10%
                        </Card.Text>
                        <small className='text-muted'>Free Shipping</small>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
              <CardGroup>
                {memoryData.slice(1, 4).map((item, index) => {
                  return (
                    <Card style={{ width: '18rem' }} key={index} border='info'>
                      <Card.Img
                        height='168px'
                        variant='top'
                        style={{ maxHeight: '270px' }}
                        src={`${baseUrl}${item.image}`}
                      />
                      <Card.Body>
                        <div height='168px'>
                          <Card.Text>
                            {createArray(5).map((n, i) => (
                              <Star key={i} selected={item.rating > i} />
                            ))}
                          </Card.Text>
                          <Card.Title>{item.name}</Card.Title>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <Card.Title>€{item.price}</Card.Title>
                        <Card.Text
                          style={{
                            position: 'relative',
                            background: '#cc4e00',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '11px',
                            textAlign: 'left',
                            paddingLeft: '3px',
                            paddingRight: '3px',
                          }}>
                          Save: 10%
                        </Card.Text>
                        <small className='text-muted'>Free Shipping</small>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
