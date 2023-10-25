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
      <li className={`nav-bar-link ${location.pathname === '/reservations/new'  ? 'active' : ''}`}>
        <NavLink to="/reservations/new">RESERVE</NavLink>
      </li>
      <li className={`nav-bar-link ${location.pathname === '/my'  ? 'active' : ''}`}>
        <NavLink to="/my">MY RESERVATIONS</NavLink>
      </li>
      <li className={`nav-bar-link ${location.pathname === '/sections/new' ? 'active' : ''}`}>
        <NavLink to="/sections/new">ADD SECTION</NavLink>
      </li>
      <li className={`nav-bar-link ${location.pathname === '/delete' ? 'active' : ''}`}>
        <NavLink to="/delete">DELETE SECTION</NavLink>
      </li>
    </nav>
  );
}

export default NavBar;
