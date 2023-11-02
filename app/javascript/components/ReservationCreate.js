import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars, FaSearch } from 'react-icons/fa';
import { addReservation } from '../redux/features/reservations/reservationSlice'
import { fetchSections } from '../redux/features/sections/sectionsSlice';
import '../../assets/stylesheets/reservationnew.css';
import { usersSlice } from '../redux/features/users/usersSlice';
import NavBar from './NavBar';

const ReservationCreate = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [error, setError] = useState('');
  const sections = useSelector((state) => state.sections);
  const { section_id } = useParams();
  const [reservationData, setReservationData] = useState({
    city: '',
    date: '',
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
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
    const selectedDate = new Date(reservationData.date);
    selectedDate.setHours(0, 0, 0, 0);// Set the time to midnight
    if (selectedDate.getTime() < currentDate.getTime()) {
      setError('Please select a future or current date for reservation.');
      return;
    }
    const newReservation = {
      city: reservationData.city,
      date: reservationData.date,
      number_of_person: reservationData.number_of_person,
      section_id: reservationData.section_id,
      user_id: users.id
    };
    dispatch(addReservation(newReservation));
    setReservationData({
      city: '',
      date: '',
      number_of_person: '',
      section_id: section_id,
    });
    setError('');
  };
  return (
    <div className='form_container flex'>
      <div className='the_nav'>
      <NavBar />
      </div>
      
       <div className='reserve_content  flex'>
    <div className='booking_headline'>
      <h3 className='flex'>
           <span >RESERVE TABLE FROM BOOKING-BITES</span>
           <hr className='underline'></hr>
      </h3>
        <p className='first_p flex'>There are different section of restuarant. Today one of them is waiting for you! Our web application offers a seamless dining reservation.</p>
        <p className='second_p flex'>You can conveniently choose your preferred dining ambience, whether it's the cozy bar, the chic lounge</p>
        <p className='thir_p flex'>the scenic rooftop, the tranquil garden, or the vibrant live music area.</p>
        <p className='fourth_p flex'>If you wish to book this section just use the form below.</p>
      </div>
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
     type="hidden"
     name="user_id"
     value={users.id}
     />
    <input
      type="number"
      name="number_of_person"
      value={reservationData.number_of_person}
      onChange={handleChange}
      min={1}
      placeholder="#Person"
      className='input'
    />

    </div>
    {error && <p>{error}</p>}
    <button type="submit" className='flex reserve-button'>Reserve</button>
  </form>
  </div>
  </div>
  );
}

export default ReservationCreate;
