import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  addrestaurant } from '../redux/features/restaurants/restaurantSlicer';
import { NavLink } from 'react-router-dom';
import { TiMediaPlayReverseOutline } from "react-icons/ti";
import '../../assets/stylesheets/sectionnew.css';
import NavBar from './NavBar';

function CreateRestaurantForm() {
  const dispatch = useDispatch();
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    address: '',
    city: ''
  });

  const handleChange = (e) => {
    setRestaurantData({
      ...restaurantData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      name: restaurantData.name,
      address: restaurantData.address,
      city: restaurantData.city
    };
    dispatch(addrestaurant( newRestaurant)).unwrap();
    setRestaurantData({
      name: '',
      address: '',
      city: ''
    });
  };

  return (
  <div className='form_containers flex'>
    <div className='the_nav'>
      <NavBar />
      </div>
      <div className='section_new_content flex'>

    
    <form onSubmit={handleSubmit} className="flex" id="selection_form">
      <input
        type="text"
        name="name"
        value={restaurantData.name}
        onChange={handleChange}
        placeholder="Restaurant Name"
        className="inputs"
      />
      <input
        type="text"
        name="address"
        value={restaurantData.address}
        onChange={handleChange}
        placeholder="Address"
        className="inputs"
      />
      <input
        type="text"
        name="city"
        value={restaurantData.city}
        onChange={handleChange}
        placeholder="City"
        className="inputs"
      />
      <button type="submit" className="flex new-section-button">
        Create Restaurant
      </button>
      <NavLink to="/sections/new">
          <button className='go-back'>
           <TiMediaPlayReverseOutline className="previous" />
           </button>
    </NavLink>
    </form>
  </div>
  </div>
  );
}

export default CreateRestaurantForm;