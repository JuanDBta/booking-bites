import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../assets/stylesheets/section_detail.css';
 
function SectionDetail() {
    const sections = useSelector((state) => state.sections);
    const { id } = useParams();
    const detailsection = sections.find((section) => section.id === Number(id));
    if (!detailsection) {
        return <div>Loading...</div>; 
      }
      return (
        <div className='detail_container flex'>
          <div className='detail_img'><img src={detailsection.image} alt="Section Image" /></div>
          <ul className='detail_list'>
            <h2 className='discover flex'>{detailsection.name}</h2>
            <p className='discover flex'></p>
            <li>
                <p>Description :</p>
                <p>{detailsection.description}</p>
            </li>
            <li>
                <p>Capacity:</p>
                <p> {detailsection.capacity}</p>
            </li>
            <li>
                 <p>Cover: </p>
                 <p>{detailsection.cover ? 'Yes' : 'No'}</p>
            </li>
            <li>
                <p>Live Music:</p>
                <p> {detailsection.live_music ? 'Yes' : 'No'}</p>
            </li>
            <p className='discover flex'>
                 Discover more Section
                 <img src="/detail_right_arrow.png" alt="Discover Icon" className="discover-icon" style={{ width: '1em', height: 'auto' }} />
            </p>
            <p className='flex discover '> <button className='detail_reserve flex'>
                 Book a table
                 <div className="circle-right"><p>&gt;</p></div>
                 </button>
            </p>
        </ul>
            
        </div>
      );
    }
    
    export default SectionDetail;