import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSection } from '../redux/features/sections/sectionsSlice';
import { fetchrestaurants} from '../redux/features/restaurants/restaurantSlicer';
import '../../assets/stylesheets/sectionnew.css';
import { Link } from 'react-router-dom';
const sections = [
  { name: 'Cozy bar', image: '/cozy-bar.jpg' },
  { name: 'The chic lounge', image: '/lounge.jpg' },
  { name: 'Scenic rooftop', image: '/rooftop1.jpg' },
  { name: 'Tranquil garden', image: '/garden.jpg' },
  { name: 'The vibrant live music area', image: '/live_music.jpg' },
  { name: 'Private dining room', image: '/private.jpg' },
  { name: 'Cosy fireplace area', image: '/fire.jpg' }
];

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
    const { name, value, type, checked } = e.target;
  
    if (type === 'checkbox') {
      setSectionData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (name === 'name') {
      const selectedSection = sections.find((section) => section.name === value);
      setSectionData((prevData) => ({
        ...prevData,
        [name]: value,
        image: selectedSection ? selectedSection.image : '',
      }));
    } else {
      setSectionData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
      cover: sectionData.cover || false,
      live_music: sectionData.live_music || false,
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
    <div className='form_containers flex'>
    <form onSubmit={handleSubmit} className="flex" id="selection_form">
      {restaurants.length > 0 ? (
        <>
        <select
            name="restaurant_id"
            value={sectionData.restaurant_id}
            onChange={handleChange}
            id="selects"
          >
            <option value="">Select a Restaurant</option>
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}

          </select>
           <select
            name="name"
            value={sectionData.name}
            onChange={handleChange}
            id="selects"
          >
            <option value="">Select a Section</option>
            {sections.map((section) => (
              <option key={section.name} value={section.name}>
                {section.name}
              </option>
            ))}
          </select>
                    
          <input
            type="number"
            name="capacity"
            value={sectionData.capacity}
            onChange={handleChange}
            min={1}
            placeholder="Capacity"
            className="inputs cap"
          />

<input
            type="textarea"
            name="description"
            value={sectionData.description}
            onChange={handleChange}
            placeholder="Description"
            className="inputs"
          />
    
          <div className='flex check'>
           <input
            type="checkbox"
            name="cover"
            checked={sectionData.cover}
            onChange={handleChange}
            className="inputs"
          />
          <label htmlFor="cover">Cover</label>
          <input
            type="checkbox"
            name="live_music"
            checked={sectionData.live_music}
            onChange={handleChange}
            className="inputs"
          />
          <label htmlFor="live_music">Live music</label>
          </div>
          
      <button type="submit" className="new-section-button">
        Create Section
      </button>
        </>
      ) : (
        <>
          <h3 className="notice flex">Please, first create a restaurant!</h3>
          <Link to="/restaurant/new">
            <p className="flex discover">
              <button className="detail_reserve flex"  id="back">
                Create New Restaurant
                <div className="circle-right">
                  <p>&gt;</p>
                </div>
              </button>
            </p>
          </Link>
        </>
      )}
    </form>
    </div>
  );
}

export default SectionNew;