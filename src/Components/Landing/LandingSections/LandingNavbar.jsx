import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../assets/Images/gi.png';
import '../../../assets/Styles/navbarstyle.css';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../../utils/useContext';

const LandingNavbar = ({ defaultActiveMenuItem }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(defaultActiveMenuItem);
  const { logout, auth } = useDataContext();

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className='test '>
      <header className="header_section ">
        <div className="container-fluid">
          <Navbar className="navbar-expand-lg custom_nav-container md:h-[75px]" expand="lg">
            <Navbar.Brand href="/">
              <span className="logo-container">
                <img src={logo} className='logo h-[65px] w-[65px]' alt="GI Club Logo" />
                <h1 className="fontGi  mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-3xl lg:text-4xl dark:text-white">Gi <mark class="px-1 py-0 h-fit fontGi text-white bg-green-600 rounded">Club</mark></h1>
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
                <li className={`nav-item ${activeMenuItem === 'my space' ? 'active' : ''}`}>
                  {/* Conditional rendering based on authentication status */}
                  {auth.isLogged ? (
                    <Link to="/user/myspace" className="nav-link" onClick={() => handleMenuItemClick('my space')}>
                      My Space
                    </Link>
                  ) : (
                    <Link to="/get-started/login" className="nav-link" onClick={() => handleMenuItemClick('my space')}>
                      My Space
                    </Link>
                  )}
                </li>
                <li className={`nav-item ${activeMenuItem === 'team' ? 'active' : ''}`}>
                  <Link to="/team" className="nav-link" onClick={() => handleMenuItemClick('team')}>
                    Team
                  </Link>
                </li>
                {!auth.isLogged ? (
                  <li className={`nav-item ${activeMenuItem === 'login' ? 'active' : ''}`}>
                    <Link to="/get-started/login" className="nav-link" onClick={() => handleMenuItemClick('login')}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginLeft: '5px' }}>Login</span>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={`nav-item ${activeMenuItem === 'login' ? 'active' : ''}`}>
                    <div className="nav-link" onClick={() => {
                      handleMenuItemClick('logout');
                      return logout();
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px', cursor: 'pointer' }} className='d-flex flex-row'>Logout
                          <svg className='ms-2' fill='lightgrey' width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7."/>
                            </svg>
                      </span>
                    </div>
                  </div>
                </li>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  </div>
);
}

export default LandingNavbar;

