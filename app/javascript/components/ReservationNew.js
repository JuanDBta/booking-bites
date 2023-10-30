import React from 'react';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars, FaSearch } from 'react-icons/fa';
import { addReservation } from '../redux/features/reservations/reservationSlice'
import { fetchSections } from '../redux/features/sections/sectionsSlice';
import '../../assets/stylesheets/reservationnew.css';
import { usersSlice } from '../redux/features/users/usersSlice';

function ReservationNew() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const sections = useSelector((state) => state.sections);
  const [reservationData, setReservationData] = useState({
    city: '',
    date: '',
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
      user_id: users.id
    };
    dispatch(addReservation(newReservation)).unwrap();
    setReservationData({
      city: '',
      date: '',
      number_of_person: '',
      section_id: '',
    });
  };
  return (
    <div className='form_container flex'>
      <div className='booking_headline'>
        <h3 className='flex'>
           <span >RESERVE TABLE FROM BOOKING-BITES</span>
           <hr className='underline'></hr>
        </h3>
        <p className='first_p flex'>There are different section of restuarant. Today one of them is waiting for you! Our web application offers a seamless dining reservation.</p>
        <p className='second_p flex'>You can conveniently choose your preferred dining ambience, whether it's the cozy bar, the chic lounge</p>
        <p className='thir_p flex'>the scenic rooftop, the tranquil garden, or the vibrant live music area.</p>
        <p className='fourth_p flex'>If you wish to have one them just use the selector below</p>
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
    <>
     <select
    name="section_id"
    value={reservationData.section_id}
     onChange={handleChange}
     className='input'
     id="select"
     
     >
     <option value="">Select a Section</option>
          {sections.map((section) => (
          <option key={section.id} value={section.id}>
            {section.name}
          </option>
          ))}
    </select>
    </>
     
    <input
      type="number"
      name="number_of_person"
      value={reservationData.number_of_person}
      onChange={handleChange}
      min={1}
      placeholder="# People"
      className='input'
    />
     <input
     type="hidden"
     name="user_id"
     value={users.id}
     />
    </div>
    
    
    <button type="submit" className='reserve-button'>Reserve Now</button>
  </form>
  </div>
  );
}

export default ReservationNew;
