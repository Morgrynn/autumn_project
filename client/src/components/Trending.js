import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Image, Row, Col, Button } from 'react-bootstrap';

export default function Home({ products, baseUrl }) {
  return (
    <Container className='mt-5'>
      <Row>
        <Col></Col>
        <Col xs={9}>
          <div className='main-title text-center'>Trending</div>
          <Table responsive hover>
            <tbody>
              {/* {console.log('Products: ', typeof products)} */}
              {/* {products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Container>
                        <Row>
                          <Col style={{ width: '171px' }}>
                            <Image
                              src={`${baseUrl}${product.image}`}
                              thumbnail
                              style={{ maxWidth: '75%' }}
                            />
                          </Col>
                        </Row>
                      </Container>
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </Table>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
