import React from 'react';
import "./style.css";
import Iframe from 'react-iframe';

const Footer = () => {
  return (
    <div className="footer-copyright">
    <section>
    <Iframe url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/584131707&color=%23060606&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        width="100%"
        height="166px"
        id="myId"
        className="soundcloud"
        position="relative"
        allow="encrypted-media"
        overflow="hidden"
        allowFullScreen/>
        </section>
    <ul className='footer-icons'>
    <a href="https://www.nandikayyy.com">Home</a>
    <a href="https://www.nandikayyy.com/bio">Bio</a>
    <a href="https://www.nandikayyy.com/live">!Live</a>
    <a href="https://www.nandikayyy.com/contact">Contact</a>
    </ul>
    <br></br> 
    <br></br> 
    © 2019 Copyright
    <br></br> 
    Coded with
    <i className="fa fa-heart" aria-hidden="true"></i>by
      <a href="https://www.iamsdawson.com/"> Shaun Dawson</a>
    </div>
  );
};
export default Footer;


