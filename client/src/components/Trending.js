import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table, Image } from 'react-bootstrap';

export default function Home({ productData, baseUrl, location, onClick }) {
  let displaySearchedItems;

  if (productData.length === 0) {
    displaySearchedItems = (
      <Container className='mt-5'>
        <Row>
          <Col></Col>
          <Col xs={9}>
            <div className='main-title text-center'>Trending</div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  } else {
    displaySearchedItems = (
      <Container>
        <Table>
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
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }

  return <>{displaySearchedItems}</>;
}
