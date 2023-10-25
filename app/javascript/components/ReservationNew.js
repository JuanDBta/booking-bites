import React from 'react';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../redux/features/reservations/reservaionSlicer'
import { fetchSections } from '../redux/features/sections/sectionsSlice';
import '../../assets/stylesheets/reservationnew.css';

function ReservationNew() {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections);
  const [reservationData, setReservationData] = useState({
    city: '',
    date: '',
    user:'',
    number_of_person: '',
    section_id: '',
  })
  const handleChange = (e) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      city: reservationData.city,
      date: reservationData.date,
      number_of_person: reservationData.number_of_person,
      section_id: reservationData.section_id,
      user: reservationData.user
    };
    dispatch(addReservation(newReservation));
    setReservationData({
      city: '',
      date: '',
      user: '',
      number_of_person: '',
      section_id: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="city"
      value={reservationData.city}
      onChange={handleChange}
      placeholder="City"
    />
    <input
      type="date"
      name="date"
      value={reservationData.date}
      onChange={handleChange}
      placeholder="Date"
    />
    <input
      type="number"
      name="user"
      value={reservationData.user}
      onChange={handleChange}
      placeholder="Username"
    />
    <input
      type="number"
      name="number_of_person"
      value={reservationData.number_of_person}
      onChange={handleChange}
      placeholder="number_of_person"
    />
    <select
    name="section_id"
    value={reservationData.section_id}
     onChange={handleChange}
     >
     <option value="">Select a section</option>
          {sections.map((section) => (
          <option key={section.id} value={section.id}>
            {section.name}
          </option>
          ))}
    </select>
    <button type="submit">Reserve</button>
  </form>
  );
}

export default ReservationNew;
