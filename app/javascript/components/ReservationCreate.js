import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../redux/features/reservations/reservaionSlicer'
import { fetchSections } from '../redux/features/sections/sectionsSlice';
import '../../assets/stylesheets/reservationnew.css';

function ReservationCreate() {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections);
  const { section_id } = useParams();
  const [reservationData, setReservationData] = useState({
    city: '',
    date: '',
    user_id:'',
    number_of_person: '',
    section_id: section_id,
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
      user_id: reservationData.user_id
    };
    dispatch(addReservation(newReservation));
    setReservationData({
      city: '',
      date: '',
      user_id: '',
      number_of_person: '',
      section_id: '',
    });
  };
  return (
    <div className='form_container flex'>
    <form onSubmit={handleSubmit} className='flex'>
    <div class="form_row">
    <input
      type="text"
      name="city"
      value={reservationData.city}
      onChange={handleChange}
      placeholder="City"
      className='input'
    />
    <input
      type="date"
      name="date"
      value={reservationData.date}
      onChange={handleChange}
      placeholder="Date"
      className='input'
    />
    </div>
    <div class="form_row">
    <input
      type="number"
      name="user_id"
      value={reservationData.user_id}
      onChange={handleChange}
      placeholder="Username id"
      className='input'
    />
    <input
      type="number"
      name="number_of_person"
      value={reservationData.number_of_person}
      onChange={handleChange}
      min={1}
      placeholder="number_of_person"
      className='input'
    />

    </div>
    
    <button type="submit">Reserve</button>
  </form>
  </div>
  );
}

export default ReservationCreate;
