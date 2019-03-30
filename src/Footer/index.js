import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-copyright text-center py-3">
    <ul className='footer-icons'>
    <a href="https://www.nandikayyy.com">Home</a>
    <a href="https://www.nandikayyy.com/bio">Bio</a>
    <a href="https://www.nandikayyy.com/live">!Live</a>
    <a href="https://www.nandikayyy.com/contact">Contact</a>
    </ul>
    © 2019 Copyright
    <br></br> 
    Coded with
    <i className="fa fa-heart" aria-hidden="true"></i> by
      <a href="https://www.iamsdawson.com/"> Shaun Dawson</a>
    </div>
  );
};
export default Footer;


