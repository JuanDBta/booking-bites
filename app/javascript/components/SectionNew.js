import React from 'react';
import '../../assets/stylesheets/sectionnew.css';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars, FaSearch } from 'react-icons/fa';
import { addSection} from '../redux/features/sections/sectionsSlice'
function SectionNew() {
  const dispatch = useDispatch();
  const [sectionData, setSectionData] = useState({
    name: '',
   image: '',
   description: '',
    capacity: '',
    cover: '',
    live_music:'',
    restaurant_id: '',
  })
  const handleChange = (e) => {
    setSectionData({
      ...sectionData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSection= {
      name: sectionData.name,
      image: sectionData.image,
      description: sectionData.description,
      capacity: sectionData.capacity,
      cover:sectionData.cover,
      live_music:sectionData.live_music,
      restaurant_id:sectionData.restaurant_id
    };
    dispatch(addSection(newSection)).unwrap();
    setSectionData({
      name: '',
   image: '',
   description: '',
    capacity: '',
    cover: '',
    live_music:'',
    restaurant_id: '',
    });
  };
  return (
  <form onSubmit={handleSubmit} className='flex'>
    <div class="form_row">
    
     </div>
  </form>
  );
}

export default SectionNew;
