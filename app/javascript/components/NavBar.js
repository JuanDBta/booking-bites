import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/stylesheets/navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>NavBar</h1>
      <li className="nav-bar-link"><NavLink to="/">Sections</NavLink></li>
      <li className="nav-bar-link"><NavLink to="/sections/new">Add Section</NavLink></li>
      <li className="nav-bar-link"><NavLink to="/reservations/new">Add Reservation</NavLink></li>
      <li className="nav-bar-link"><NavLink to="/reservations">My Reservations</NavLink></li>
    </nav>
  );
}

export default NavBar;
