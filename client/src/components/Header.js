import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className='nav-center'>
      <div className='nav-header'>
        <div>
          <Link to='/'>PC Picker</Link>
        </div>
        <button className='nav-toggle'>
          <FaBars />
        </button>
      </div>
      <div className='links-container'>
        <ul className='links social-icons'>
          <li>
            <FaUser /> Login/Register
          </li>
          <li>
            <FaShoppingCart /> 0.00 €
          </li>
        </ul>
      </div>
    </nav>
  );
}
