import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='foot'>
      <div className='menu'>
      <div className='home'>
        <ul>
          <h3>Home</h3>
          <li>Details</li>
          <li>Features</li>
          <li>Others</li>
        </ul>
      </div>
      <div className='about'>
        <ul>
          <h3>About Us</h3>
          <li>Features</li>
          <li>Trainers</li>
          <li>Experience</li>
        </ul>
      </div>
      <div className='serv'>
        <ul>
          <h3>Services</h3>
          <li>Facilities</li>
          <li>E-books</li>
          <li>Recorded Sessions</li>
        </ul>
      </div>
      <div className='prod'>
        <ul>
          <h3>Products</h3>
          <li>Html Materials</li>
          <li>Css Materials</li>
          <li>Js Materials</li>
        </ul>
      </div>
      <div className='contact'>
        <ul>
          <h3>Contact Us</h3>
          <li>Contact Form</li>
          <li>Phone Number</li>
          <li>Email ID</li>
        </ul>        
      </div>
      </div>
      <p>&copy;This is my website</p>
    </div>
  )
}

export default Footer
