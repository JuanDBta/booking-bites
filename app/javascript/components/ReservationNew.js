import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/features/reservations/reservaionSlicer'
import '../../assets/stylesheets/reservationnew.css';

function ReservationNew() {
  const dispatch = useDispatch();
  const [reservationData, setReservationData] = useState({
    city: '',
    date: '',
    user: '',
    number_of_person: '',
    section: '',
  })
  const handleChange = (e) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
  };

  return (
  
  );
}

export default ReservationNew;
