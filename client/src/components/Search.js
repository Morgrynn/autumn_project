import React from 'react';
import './Main.css';
import { Col } from 'react-bootstrap';

export default function Search({ handleSearch, itemSearch }) {
  return (
    <Col xs={9}>
    <form onSubmit={itemSearch}>
      <div className='nav-menu'>
        <input type='text' placeholder='Search ...' onChange={handleSearch} />
      </div>
      </form>
    </Col>
  );
}
