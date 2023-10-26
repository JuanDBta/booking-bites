import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationsApi } from '../redux/features/reservations/reservationsApiSlice';
import '../../assets/stylesheets/reservations.css';

function Reservations() {
  const dispatch = useDispatch();
  const reservationsApi = useSelector((state) => state.reservationsApi);

  useEffect(() => {
    dispatch(fetchReservationsApi());
  }, [dispatch]);


  return (
    <div className="reservations-container">
      <h1 className="title">MY RESERVATIONS</h1>
      <h3 className="title-description">List of your reservations</h3>
      <div className="dotted-line"></div>
      <ul className="reservations-list">
        {reservationsApi.map((reservation) => (
        <li key={reservation.id} className="info">
            <p>Reservation #{reservation.id}</p>
            <p>City: {reservation.city}</p>
            <p>Date: {reservation.date}</p>
            <p>Number of Persons: {reservation.number_of_person}</p>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
