import React from 'react';
import './Main.css';
import { Col, Form, FormControl, Button, InputGroup } from 'react-bootstrap';

export default function Search({
  value,
  handleOnInputChange,
  onSubmitSearchForm,
}) {
  return (
    // <Col xs={9}>
    // <form onSubmit={itemSearch}>
    //   <div className='nav-menu'>
    //     <input type='text' placeholder='Search ...' onChange={handleSearch} />
    //   </div>
    //   </form>
    // </Col>
    <Col xs={9}>
      <Form onSubmit={onSubmitSearchForm}>
        <Form.Group>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Search ...'
              aria-label='Search'
              aria-describedby='basic-addon2'
              value={value}
              onChange={handleOnInputChange}
            />
            <InputGroup.Append>
              <Button type='submit' variant='outline-secondary'>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </Col>
  );
}
