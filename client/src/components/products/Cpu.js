import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ListGroup,
  Table,
  Image,
  Row,
  Col,
  Button,
  ToggleButton,
  ButtonGroup,
} from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#ff960c' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function Cpu({
  filteredData,
  onClick,
  baseUrl,
  location,
  addItem,
  checked,
  priceChecked,
  toggleHandler,
  priceHandler,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup style={{ marginTop: '20px' }}>
            <h4
              style={{
                paddingBottom: '0.5rem',
                borderBottom: '2px solid black',
              }}>
              Filter
            </h4>
            <ButtonGroup toggle vertical classNames='mb-2'>
              <ToggleButton
                style={{
                  borderColor: 'lightgray',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }}
                type='checkbox'
                variant='secondary'
                checked={checked}
                value='amd'
                onChange={toggleHandler}>
                AMD
              </ToggleButton>
              <ToggleButton
                style={{
                  borderColor: 'lightgray',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }}
                type='checkbox'
                variant='secondary'
                checked={checked}
                value='intel'
                onChange={toggleHandler}>
                Intel
              </ToggleButton>
            </ButtonGroup>
            <h4
              style={{
                marginTop: '10px',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid black',
              }}>
              Price
            </h4>
            <ButtonGroup toggle vertical classNames='mb-2'>
              <ToggleButton
                style={{
                  borderColor: 'lightgray',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }}
                type='checkbox'
                variant='secondary'
                checked={priceChecked}
                value='low'
                onChange={priceHandler}>
                Low
              </ToggleButton>
              <ToggleButton
                style={{
                  borderColor: 'lightgray',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }}
                type='checkbox'
                variant='secondary'
                checked={priceChecked}
                value='high'
                onChange={priceHandler}>
                High
              </ToggleButton>
            </ButtonGroup>
          </ListGroup>
        </Col>
        <Col>
          <Table responsive hover style={{ marginTop: '5px' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Core Count</th>
                <th>Core Clock</th>
                <th>Boost Clock</th>
                <th>TDP</th>
                <th>Integrated Graphics</th>
                <th>SMT</th>
                <th>Rating</th>
                <th>Price</th>
                <th style={{ textAlign: 'center' }}>
                  <RiShoppingCartFill
                    style={{ marginRight: '3px', marginBottom: '3px' }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => {
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
                    <td>{item.core_count}</td>
                    <td>{item.core_clock}</td>
                    <td>{item.boost_clock}</td>
                    <td>{item.tdp}</td>
                    <td>{item.integrated_graphics}</td>
                    <td>{item.smt}</td>
                    <td style={{ display: 'flex', borderBottom: 'none' }}>
                      {createArray(5).map((n, i) => (
                        <Star key={i} selected={item.rating > i} />
                      ))}
                    </td>
                    <td>€{item.price}</td>
                    <td>
                      <Button
                        variant='outline-dark'
                        onClick={() => addItem(item)}>
                        Add
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
