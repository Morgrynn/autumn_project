import React from 'react';
import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className='nav-center'>
      <div className='nav-header'>
        <div>PC Picker</div>
        <button className='nav-toggle'>
          <FaBars />
        </button>
      </div>
      {/* ADD SEARCH BAR HERE */}
      <div className='srch-container'>
        <input className='srch-field' type='text' />
        <button className='srch-toggle'>Search</button>
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
