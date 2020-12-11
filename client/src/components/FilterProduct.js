import React from 'react';
import { Form, Col, ListGroup } from 'react-bootstrap';

export default function FilterProduct({ productData }) {
  return (
    <Col xs={2}>
      <ListGroup style={{ marginTop: '20px' }}>
        <h4
          style={{ paddingBottom: '0.5rem', borderBottom: '2px solid black' }}>
          Filter
        </h4>
        {console.log('PD -> ', productData)}
        <Form>
          <h5 style={{ fontSize: '14px' }}>Manufacturer</h5>
          <Form.Check type='checkbox' id='amd' label={`AMD`} />
          <Form.Check type='checkbox' id='intel' label={`Intel`} />
        </Form>
      </ListGroup>
    </Col>
  );
}
