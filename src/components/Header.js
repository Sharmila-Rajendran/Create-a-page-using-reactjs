import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className='head'>
      <h1>Full Stack Development</h1>
      <ul>
        <li><img src={require('./Logo.jpg')}/></li>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Header;
