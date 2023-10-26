import React from 'react';
import '../../assets/stylesheets/reservations.css';

function Reservations() {
  return (
    <div className="reservations-container">
      <h1 className="title">My Reservations</h1>
      <h3 className="title-description">List of your reservations</h3>
      <div className="dotted-line"></div>
      <ul className="reservations-list">
        <li className="info">Reservation #1</li>
        <li className="info">Reservation #2</li>
      </ul>
    </div>
    
  );
}

export default Reservations;
