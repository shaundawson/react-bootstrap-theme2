import React from 'react';
import "./style.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-sm navbar-light">
      <div className='social-icons'>
      <ul>
      <a href="https://www.instagram.com/nandikayyy/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true"></i></a>
      <a href="https://www.facebook.com/nandikayyy" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" aria-hidden="true"></i></a>
      <a href="https://twitter.com/nandikayyy" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i></a>
      <a href="https://soundcloud.com/nandikayyy" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud" aria-hidden="true"></i></a>
      </ul>
      </div>
        <a className="navbar-brand" className="logo" href="/home"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span>
        <i className="fas fa-bars"></i>
    </span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bio">Bio</a>
            </li>
            <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects 
              <span className="caret">
              <i className="fas fa-caret-down"></i>
        
              </span></a>
              <ul className="dropdown-menu">
                <li><a href="https://www.blackfriendsdinner.com" target="blank" className="padding-list">Black Friends Dinner</a></li>
                <li><a href="https://www.patreon.com/hopeandhardpills" target="blank" className="padding-list">Hope and Hard Pills</a></li>
                <li><a href="https://www.assignedsex.com" target="blank" className="padding-list">Assigned Sex</a></li>
              </ul>
            </li>
          </ul>
            <li className="nav-item">
              <a className="nav-link" href="/live">!Live</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
            
           
          </ul>
        
        </div>
      </nav>
    </div>
  );
};
export default Navbar;


