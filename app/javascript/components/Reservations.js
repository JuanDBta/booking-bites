import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationsApi } from '../redux/features/reservations/reservationsApiSlice';
import { fetchSections } from '../redux/features/sections/sectionsSlice';
import '../../assets/stylesheets/reservations.css';
import { CiUser } from "react-icons/ci";

function Reservations() {
  const dispatch = useDispatch();
  const reservationsApi = useSelector((state) => state.reservationsApi);
  const sections = useSelector(state => state.sections);
  const userID = useSelector(state => state.users.id);

  useEffect(() => {
    dispatch(fetchReservationsApi());
    dispatch(fetchSections());
  }, [dispatch]);

  const getSectionName = (sectionId) => {
    const section = sections.find(section => section.id === sectionId);
    return section ? section.name : 'Unknown Section';
  };

  const userReservations = reservationsApi.filter(reservation => reservation.user_id === userID);

  return (
    <div className="reservations-container">
      <h1 className="title-res">MY RESERVATIONS</h1>
      <h3 className="title-description">List of your reservations</h3>
      <div className="dotted-line"></div>
      <ul className="reservations-list">
        {userReservations.map((reservation, index) => (
        <li key={index} className="info">
            <p className="text">RESERVATION #{index + 1}:</p>
            <p className="text desc">ID {reservation.id}</p>
            <p className="text desc">{reservation.date}</p>
            <p className="text desc">{reservation.city}</p>
            <p className="text desc">{getSectionName(reservation.section_id)}</p>            
            <div className="people">
            <CiUser className="people-icon" /><span className="number">{reservation.number_of_person}</span></div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
