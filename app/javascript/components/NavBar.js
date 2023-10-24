import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/stylesheets/navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <li className="nav-bar-link"><NavLink to="/">SECTIONS</NavLink></li>
      <li className="nav-bar-link"><NavLink to="/sections/new">ADD SECTION</NavLink></li>
      <li className="nav-bar-link"><NavLink to="/reservations/new">ADD RESERVATION</NavLink></li>
      <li className="nav-bar-link"><NavLink to="/reservations">MY RESERVATIONS</NavLink></li>
    </nav>
  );
}

export default NavBar;
