import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSection } from '../redux/features/sections/sectionsSlice';
import { fetchrestaurants} from '../redux/features/restaurants/restaurantSlicer';
import '../../assets/stylesheets/sectionnew.css';
import { Link } from 'react-router-dom';

function SectionNew() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants);
  const [sectionData, setSectionData] = useState({
    name: '',
    image: '',
    description: '',
    capacity: '',
    cover: '',
    live_music: '',
    restaurant_id: '',
  });

  const handleChange = (e) => {
    setSectionData({
      ...sectionData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(fetchrestaurants());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSection = {
      name: sectionData.name,
      image: sectionData.image,
      description: sectionData.description,
      capacity: sectionData.capacity,
      cover: sectionData.cover,
      live_music: sectionData.live_music,
      restaurant_id: sectionData.restaurant_id,
    };
    dispatch(addSection(newSection)).unwrap();
    setSectionData({
      name: '',
      image: '',
      description: '',
      capacity: '',
      cover: '',
      live_music: '',
      restaurant_id: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex" id="selection_form">
      {restaurants.length > 0 ? (
        <>
          <input
            type="text"
            name="name"
            value={sectionData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input"
          />
          <input
            type="textarea"
            name="description"
            value={sectionData.description}
            onChange={handleChange}
            placeholder="Description"
            className="input"
          />
          <input
            type="checkbox"
            name="cover"
            checked={sectionData.cover}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="cover">Cover</label>
          <input
            type="checkbox"
            name="live_music"
            checked={sectionData.live_music}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="live_music">Live music</label>
          <input
            type="number"
            name="capacity"
            value={sectionData.capacity}
            onChange={handleChange}
            min={1}
            placeholder="Capacity"
            className="input"
          />

          <select
            name="restaurant_id"
            value={sectionData.restaurant_id}
            onChange={handleChange}
            className="input"
            id="select"
          >
            <option value="">Select a restaurant</option>
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}
          </select>
      <button type="submit" className="flex">
        Create
      </button>
        </>
      ) : (
        <>
          <p className="notice">Please create a restaurant first!</p>
          <Link to="/restaurant/new">
            <p className="flex discover">
              <button className="detail_reserve flex">
                Create restaurant
                <div className="circle-right">
                  <p>&gt;</p>
                </div>
              </button>
            </p>
          </Link>
        </>
      )}
    </form>
  );
}

export default SectionNew;