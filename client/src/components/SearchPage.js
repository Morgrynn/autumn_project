import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table, Image } from 'react-bootstrap';

export default function SearchPage({ productData, baseUrl, onClick }) {
  let displaySearchedItems;

  const pattern = /(\/gpu\/|\/cpu\/|\/motherboards\/|\/storage\/|\/memory\/|\/power\/|\/cooler\/|\/cases\/)/g;

  if (productData.length === 0) {
    displaySearchedItems = (
      <Container className='mt-5'>
        <Row>
          <Col></Col>
          <Col xs={9}>
            <div className='main-title text-center'>Search Products</div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  } else {
    displaySearchedItems = (
      <Container>
        <Table responsive borderless hover>
          <tbody>
            {productData.map((item, index) => {
              console.log('URL-> ', `${item.image.match(pattern)}${item.id}`);
              return (
                <tr key={index} onClick={() => onClick(item)}>
                  <td>
                    <Container>
                      <Link
                        to={`${item.image.match(pattern)}${item.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}>
                        <Row>
                          <Col xs={{ span: 3, offset: 3 }}>
                            <Image
                              src={`${baseUrl}${item.image}`}
                              thumbnail
                              style={{ width: '70px' }}
                            />
                          </Col>
                          <Col xs={6}>{item.name}</Col>
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
