import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import '../../assets/stylesheets/navbar.css';
import { FaTwitter } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { BsVimeo } from 'react-icons/bs';
import { FaPinterestP, FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="menu-top_div" onClick={toggleNav}>
        <div className='menu'>{isNavOpen ? <FaTimes className='menu-icon'/> : <FaBars className='close-icon' />}</div>
      </div>

      <div className={`nav-container ${isNavOpen ? 'app-header' : 'close'}`}>
        <div className="logo-title">
          <h1 className="title-header">BookingBites</h1>
        </div>

        <nav className="navbar">          
          <li className={`nav-bar-link ${location.pathname === '/' ? 'active' : ''}`}>
            <NavLink to="/home">SECTIONS</NavLink>
          </li>
          <li className={`nav-bar-link ${location.pathname === '/reservations/new' ? 'active' : ''}`}>
            <NavLink to="/reservations/new">RESERVE</NavLink>
          </li>
          <li className={`nav-bar-link ${location.pathname === '/my' ? 'active' : ''}`}>
            <NavLink to="/my">MY RESERVATIONS</NavLink>
          </li>
          <li className={`nav-bar-link ${location.pathname === '/sections/new' ? 'active' : ''}`}>
            <NavLink to="/sections/new">ADD SECTION</NavLink>
          </li>
          <li className={`nav-bar-link ${location.pathname === '/delete' ? 'active' : ''}`}>
            <NavLink to="/delete">DELETE SECTION</NavLink>
          </li>
          {
              <Logout />
            }
        </nav>

        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="twitter-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <ImFacebook className="facebook-icon" />
          </a>
          <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
            <TiSocialGooglePlus className="google-icon" />
          </a>
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
            <BsVimeo className="v-icon" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterestP className="pinterest-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;