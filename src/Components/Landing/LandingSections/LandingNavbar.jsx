import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../../assets/Images/gi.png';
import '../../../assets/Styles/navbarstyle.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from "/src/Store/authSlice.js";

const LandingNavbar = ({defaultActiveMenuItem}) => {
  const [activeMenuItem, setActiveMenuItem] = useState(defaultActiveMenuItem);
  const dispatch = useDispatch();
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
const auth = useSelector(state => state.auth);
  console.log(auth)
  return (
    <div className='test'>
      <header className="header_section">
        <div className="container-fluid">
          <Navbar className="navbar-expand-lg custom_nav-container" expand="lg">
            <Navbar.Brand href="/">
                <span className="logo-container">
                  <img src={logo} className='logo' width={70}/>
                  <span className="logo-text">GI Club</span>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" className="navbar-toggler" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="navbar-nav">
                <li className={`nav-item ${activeMenuItem === 'home' ? 'active' : ''}`}>
                  <Link to="/" className="nav-link" onClick={() => handleMenuItemClick('home')}>
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className={`nav-item ${activeMenuItem === 'about' ? 'active' : ''}`}>
                  <Link to="/about" className="nav-link" onClick={() => handleMenuItemClick('about')}>
                    About
                  </Link>
                </li>
                <li className={`nav-item ${activeMenuItem === 'activities' ? 'active' : ''}`}>
                  <Link to="/activities" className="nav-link" onClick={() => handleMenuItemClick('activities')}>
                    Activities
                  </Link>
                </li>
               {auth.isLogged&& <li className={`nav-item ${activeMenuItem === 'my space' ? 'active' : ''}`}>
                  <Link to="/user/myspace" className="nav-link" onClick={() => handleMenuItemClick('my space')}>
                    My Space
                  </Link>
                </li>}
                <li className={`nav-item ${activeMenuItem === 'team' ? 'active' : ''}`}>
                  <Link to="/team" className="nav-link" onClick={() => handleMenuItemClick('team')}>
                    Team
                  </Link>
                </li>
              {!auth.isLogged? <li className={`nav-item ${activeMenuItem === 'login' ? 'active' : ''}`}>
                  <Link to="/get-started/login" className="nav-link" onClick={() => handleMenuItemClick('login')}>
                    <i className="fa fa-user" aria-hidden="true"></i> Login
                  </Link>
                </li>
                  : <li className={`nav-item ${activeMenuItem === 'login' ? 'active' : ''}`}>
                    <div className="nav-link" onClick={() => {
                      handleMenuItemClick('logout')
                      return dispatch(logout())
                    }}>
                    <i className="fa fa-user" aria-hidden="true"></i> Log out
                  </div>
                </li>
                
                }
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