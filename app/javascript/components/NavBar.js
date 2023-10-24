import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../../assets/stylesheets/navbar.css';

function NavBar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <li className={`nav-bar-link ${location.pathname === '/' ? 'active' : ''}`}>
        <NavLink to="/">SECTIONS</NavLink>
      </li>
      <li className={`nav-bar-link ${location.pathname === '/sections/new' ? 'active' : ''}`}>
        <NavLink to="/sections/new">ADD SECTION</NavLink>
      </li>
      <li className={`nav-bar-link ${location.pathname === '/reservations/new' ? 'active' : ''}`}>
        <NavLink to="/reservations/new">ADD RESERVATION</NavLink>
      </li>
      <li className={`nav-bar-link ${location.pathname === '/reservations' ? 'active' : ''}`}>
        <NavLink to="/reservations">MY RESERVATIONS</NavLink>
      </li>
    </nav>
  );
}

export default NavBar;
