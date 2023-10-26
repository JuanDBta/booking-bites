import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationsApi } from '../redux/features/reservations/reservationsApiSlice';
import { fetchSections } from '../redux/features/sections/sectionsSlice'; // Asegúrate de importar la acción para obtener las secciones
import '../../assets/stylesheets/reservations.css';

function Reservations() {
  const dispatch = useDispatch();
  const reservationsApi = useSelector((state) => state.reservationsApi);
  const sections = useSelector(state => state.sections);

  useEffect(() => {
    dispatch(fetchReservationsApi());
    dispatch(fetchSections()); // Obtén las secciones
  }, [dispatch]);

  const getSectionName = (sectionId) => {
    const section = sections.find(section => section.id === sectionId);
    return section ? section.name : 'Unknown Section';
  };

  return (
    <div className="reservations-container">
      <h1 className="title-res">MY RESERVATIONS</h1>
      <h3 className="title-description">List of your reservations</h3>
      <div className="dotted-line"></div>
      <ul className="reservations-list">
        {reservationsApi.map((reservation, index) => (
        <li key={index} className="info">
            <p className="text">Reservation #{index + 1}:</p>
            <p className="text desc">ID {reservation.id}</p>
            <p className="text desc">{reservation.date}</p>
            <p className="text desc">{reservation.city}</p>
            <p className="text desc">{getSectionName(reservation.section_id)}</p>            
            <p className="text desc"># People: {reservation.number_of_person}</p>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
