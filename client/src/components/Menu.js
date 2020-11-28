import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className='nav-center'>
      <div className='links-container'>
        <ul className='links social-icons'>
          <li>
            <Link to='/cpu'>CPU</Link>
          </li>
          <li>
            <Link to='/cooler'>CPU-Cooler</Link>
          </li>
          <li>
            <Link to='/motherboard'>Motherboard</Link>
          </li>
          <li>
            <Link to='/memory'>Memory</Link>
          </li>
          <li>
            <Link to='/storage'>Storage</Link>
          </li>
          <li>
            <Link to='/power-supply'>Power supply</Link>
          </li>
          <li>
            <Link to='/case'>Case</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
