import React, { useState } from 'react';
import {
  Container,
  Button,
  ListGroup,
  Image,
  Row,
  Col,
  ListGroupItem,
  Tabs,
  Tab,
} from 'react-bootstrap';
import { RiShoppingCartFill } from 'react-icons/ri';

export default function CpuProductPage({ item, baseUrl, addItem }) {
  const [key, setKey] = useState('product');
  return (
    <Container style={{ marginTop: '10px' }}>
      <Row>
        <Col xs={6} md={4}>
          <div>
            <Image fluid src={`${baseUrl}${item.image}`} />
          </div>
        </Col>
        <Col xs={12} md={8}>
          <ListGroup className='list-group-flush'>
            <div>
              <ListGroupItem style={{ textAlign: 'center' }}>
                {item.name}
              </ListGroupItem>
            </div>
            <ListGroupItem>{item.core_count} Cores</ListGroupItem>
            <ListGroupItem>{item.core_clock}</ListGroupItem>
            <ListGroupItem>€{item.price}</ListGroupItem>
          </ListGroup>
          <Button
            style={{ marginTop: '5px' }}
            variant='outline-success'
            onClick={() => addItem(item)}>
            <RiShoppingCartFill
              style={{ marginRight: '3px', marginBottom: '3px' }}
            />
            Add to Cart
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: '5px' }}>
        <Col>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey='product' title='Product Description'>
              <ListGroup>
                <ListGroupItem>
                  <li>MPN: BX8070110700K</li>
                  <li>10th Gen</li>
                  <li>8 Cores & 16 Threads</li>
                  <li>3.8 GHz Clock Speed</li>
                  <li>5.1 GHz Maximum Turbo Frequency</li>
                  <li>
                    Compatible with Intel 400 series chipset based motherboards
                  </li>
                  <li>LGA 1200 Socket</li>
                  <li>Intel UHD Graphics 630</li>
                  <li>Intel Turbo Boost Max Technology 3.0 support</li>
                  <li>Intel Optane Memory Support</li>
                  <li>No thermal solution included</li>
                </ListGroupItem>
              </ListGroup>
            </Tab>
            <Tab eventKey='ratings' title='Ratings & Reviews'>
              <ListGroup>
                <ListGroupItem>
                  <div>Username</div>
                  Pairs up nicely with an Asus ROG STRIX Z490-E and an NZXT
                  Kraken X63. It seems to run pretty cool at stock clocks so
                  there should be a good amount of room for overclocking but I
                  haven't tried yet. Update: Stable overclock @ 5.1GHz but gets
                  a bit warm (85+) with the cooling setup that I have right now
                  so backed down to 5.0GHz.
                </ListGroupItem>
                <ListGroupItem>
                  <div>_another_Username</div>I decided to go for the i7-10700k
                  after doing some research and finding out that it's
                  performance is pretty close to the i9-9900 I had originally
                  wanted. Had some worries of it overheating but that was mainly
                  an issue with my incorrect original placement of the CPU
                  cooler. Runs alright but my next build I think I'll probably
                  go for the favored brand AMD.
                </ListGroupItem>
                <ListGroupItem>
                  <div>Scytherhm02</div>I love this cpu. It is so fast. I am
                  running stock at an all core 4.67 - 4.8ghz load. Some cores
                  get higher.
                </ListGroupItem>
              </ListGroup>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
