import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Build1 from '../images/display/build1.png';
import Build2 from '../images/display/build2.png';
import Build3 from '../images/display/build3.png';
import Build4 from '../images/display/build4.png';
import Build5 from '../images/display/build5.png';
import Build6 from '../images/display/build6.png';
import Build7 from '../images/display/build7.png';
import Build8 from '../images/display/build8.png';
import './Shopnow.css';

export default function Shopnow() {
  return (
    <Container className='mt-5 container'>
      <div className='header'>
        <h2>Desktop / Gaming / Streaming</h2>
      </div>
      <Row className='row-items'>
        <Col className='column'>
          <Card>
            <Card.Body>
              <Card.Title>Excellent AMD Gaming/Streaming Build</Card.Title>
              <Card.Text>
                Amd Ryzen 5 5600X Parametric Video Card (Chipset: GeForce RTX
                3070) Corsair 4000D Airflow ATX Mid Tower
              </Card.Text>
              <Card.Text>€1085.93</Card.Text>
            </Card.Body>
            <Card.Img variant='bottom' src={Build1} />
          </Card>
        </Col>
        <Col className='column'>
          <Card>
            <Card.Body>
              <Card.Title>Excellent Intel Gaming/Streaming Build</Card.Title>
              <Card.Text>
                Intel Core i5-10500K Parametric Video Card (Chipset: GeForce RTX
                3070) Corsair 4000D Airflow ATX Mid Tower
              </Card.Text>
              <Card.Text>€1359.59</Card.Text>
            </Card.Body>
            <Card.Img variant='bottom' src={Build2} />
          </Card>
        </Col>
        <Col className='column'>
          <Card>
            <Card.Body>
              <Card.Title>Enthusiast AMD Gaming/Streaming Build</Card.Title>
              <Card.Text>
                Amd Ryzen 5 5600X Parametric Video Card (Chipset: GeForce RTX
                3080 Length: 224mm - 403mm; Cooling: 2 Fans, 3 Fans, 120mm
                Radiator. ...) Lian Li Lancool II Mesh ATX Mid Tower
              </Card.Text>
              <Card.Text>€1347.83</Card.Text>
            </Card.Body>
            <Card.Img variant='bottom' src={Build3} />
          </Card>
        </Col>
        <Col className='column'>
          <Card>
            <Card.Body>
              <Card.Title>Enthusiast Intel Gaming/Streaming Build</Card.Title>
              <Card.Text>
                Intel Core i5-10600K Parametric Video Card (Chipset: GeForce RTX
                3080; Length: 224mm - 403mm; Cooling: 2 Fans, 3 Fans, 120mm
                Radiator, ...) Lian Li Lancool II Mesh ATX Mid Tower
              </Card.Text>
              <Card.Text>€1621.49</Card.Text>
            </Card.Body>
            <Card.Img variant='bottom' src={Build4} />
          </Card>
        </Col>
        <Col className='column'>
          <Card>
            <Card.Body>
              <Card.Title>Magnificient AMD Gaming/Streaming Build</Card.Title>
              <Card.Text>
                Amd Ryzen 5 5600X Parametric Video Card (Chipset: GeForce RTX
                3080 Length: 224mm - 403mm; Cooling: 2 Fans, 3 Fans, 120mm
                Radiator. ...) Fractal Design Meshify C ATX Mid Tower
              </Card.Text>
              <Card.Text>€1420.81</Card.Text>
            </Card.Body>
            <Card.Img variant='bottom' src={Build5} />
          </Card>
        </Col>
        <Col className='column'>
          <Card>
            <Card.Body>
              <Card.Title>Magnificient Intel Gaming/Streaming Build</Card.Title>
              <Card.Text>
                Intel Core i7-10700K Parametric Video Card (Chipset: GeForce RTX
                3080; Length: 224mm - 403mm; Cooling: 2 Fans, 3 Fans, 120mm
                Radiator, ...) Fractal Design Meshify C ATX Mid Tower
              </Card.Text>
              <Card.Text>€1749.80</Card.Text>
            </Card.Body>
            <Card.Img variant='bottom' src={Build6} />
          </Card>
        </Col>
        <Col className='column'>
          <Card>
            <Card.Body>
              <Card.Title>Glorious AMD Gaming/Streaming Build</Card.Title>
              <Card.Text>
                Amd Ryzen 9 5900X Parametric Video Card (Chipset: GeForce RTX
                3090; Cooling: 2 Fans, 3 Fans, 120mm Radiator. ...) Cooler
                Master Masterbox TD500 Mesh White w/ Controller ATX Mid Tower
              </Card.Text>
              <Card.Text>€2398.89</Card.Text>
            </Card.Body>
            <Card.Img variant='bottom' src={Build7} />
          </Card>
        </Col>
        <Col className='column'>
          <Card>
            <Card.Body>
              <Card.Title>Glorious Intel Gaming/Streaming Build</Card.Title>
              <Card.Text>
                Intel Core i9-10900K Parametric Video Card (Chipset: GeForce RTX
                3090; Cooling: 2 Fans, 3 Fans, 120mm Radiator, ...) Cooler
                Master Masterbox TD500 Mesh White w/ Controller ATX Mid Tower
              </Card.Text>
              <Card.Text>€2899.77</Card.Text>
            </Card.Body>
            <Card.Img variant='bottom' src={Build8} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
