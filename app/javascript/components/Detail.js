import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function SectionDetail() {
    const sections = useSelector((state) => state.sections);
    const { id } = useParams();
    const detailsection = sections.find((section) => section.id === Number(id));
    if (!detailsection) {
        return <div>Loading...</div>; 
      }
      return (
        <div className='detail_container flex'>
          <img src={detailsection.image} alt="Section Image" />
          
          
              <h2 className='discover flex'>{detailsection.name}</h2>
              
              <p>{detailsection.description}</p>
            
              <p> {detailsection.capacity}</p>
            
              <p>{detailsection.cover ? 'Yes' : 'No'}</p>
            
              <p> {detailsection.live_music ? 'Yes' : 'No'}</p>
            
        </div>
      );
    }
    
    export default SectionDetail;