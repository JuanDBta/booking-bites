import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSections } from '../redux/features/sections/sectionsSlice';
import '../../assets/stylesheets/main.css';

function Main() {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections);

  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);
  return (
    <div className='main'>
      <h1 className='title'>LATEST SECTIONS</h1>
      <h3 className='title-description'>Please select a section</h3>
      <ul className='sections-list'>
        {sections.map((section) => (
          <li key={section.id}>
            <img src={section.image} className="image" alt="image" style={{ width: '20vw', height: 'auto' }} />
            <div className='name'>{section.name}</div>
            <div className='description'>{section.description}</div>
            <div className='media-links'>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <img src="/facebook.svg" className="icon" alt="Facebook" style={{ width: '3vw', height: 'auto' }} />
  </a>
  <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
    <img src="/twitter.svg" className="icon" alt="Twitter" style={{ width: '3vw', height: 'auto' }} />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img src="/instagram.svg" className="icon" alt="Instagram" style={{ width: '3vw', height: 'auto' }} />
  </a>
</div>

          </li>
        ))}
      </ul>
    </div>
  );
  
}


export default Main;
