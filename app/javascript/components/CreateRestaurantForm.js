import React, { useState } from 'react';
import  {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  addrestaurant } from '../redux/features/restaurants/restaurantSlicer';
import { NavLink } from 'react-router-dom';
import { TiMediaPlayReverseOutline } from "react-icons/ti";
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
    <form onSubmit={handleSubmit} className="flex" id="restaurant_form">
      <input
        type="text"
        name="name"
        value={restaurantData.name}
        onChange={handleChange}
        placeholder="Restaurant Name"
        className="input"
      />
      <input
        type="text"
        name="address"
        value={restaurantData.address}
        onChange={handleChange}
        placeholder="Address"
        className="input"
      />
      <input
        type="text"
        name="city"
        value={restaurantData.city}
        onChange={handleChange}
        placeholder="City"
        className="input"
      />
      <button type="submit" className="flex">
        Create Restaurant
      </button>
      <NavLink to="/sections/new">
          <button className='go-back-button'>
           <TiMediaPlayReverseOutline className="previous-icon" />
           </button>
    </NavLink>
    </form>
  );
}

export default CreateRestaurantForm;