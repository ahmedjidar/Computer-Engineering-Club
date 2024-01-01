import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../../assets/Images/gi.png';
import '../../../assets/Styles/navbarstyle.css'

const LandingNavbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('home');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className='test'>
      <header className="header_section">
        <div className="container-fluid">
          <Navbar className="navbar-expand-lg custom_nav-container" expand="lg">
            <Navbar.Brand href="index.html">
                <span className="logo-container">
                  <img src={logo} className='logo' width={70}/>
                  <span className="logo-text">GI Club</span>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" className="navbar-toggler" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="navbar-nav">
                <li className={`nav-item ${activeMenuItem === 'home' ? 'active' : ''}`}>
                  <a href="#" className="nav-link" onClick={() => handleMenuItemClick('home')}>
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className={`nav-item ${activeMenuItem === 'about' ? 'active' : ''}`}>
                  <a href="#" className="nav-link" onClick={() => handleMenuItemClick('about')}>
                    About
                  </a>
                </li>
                <li className={`nav-item ${activeMenuItem === 'activities' ? 'active' : ''}`}>
                  <a href="/activities" className="nav-link" onClick={() => handleMenuItemClick('activities')}>
                    Activities
                  </a>
                </li>
                <li className={`nav-item ${activeMenuItem === 'my space' ? 'active' : ''}`}>
                  <a href="#" className="nav-link" onClick={() => handleMenuItemClick('my space')}>
                    My Space
                  </a>
                </li>
                <li className={`nav-item ${activeMenuItem === 'team' ? 'active' : ''}`}>
                  <a href="#" className="nav-link" onClick={() => handleMenuItemClick('team')}>
                    Team
                  </a>
                </li>
                <li className={`nav-item ${activeMenuItem === 'login' ? 'active' : ''}`}>
                  <a href="#" className="nav-link" onClick={() => handleMenuItemClick('login')}>
                    <i className="fa fa-user" aria-hidden="true"></i> Login
                  </a>
                </li>
                <form className="form-inline">
                  <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </div>
  );
}

export default LandingNavbar;