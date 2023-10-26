import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TiMediaPlayReverseOutline } from "react-icons/ti";
import '../../assets/stylesheets/section_detail.css';
 
function SectionDetail() {
    const sections = useSelector((state) => state.sections);
    const { id } = useParams();
    const navigate = useNavigate ();
    // const handleBookTable = () => {
    //   navigate(`/reservation/create`);
    // };
    const detailsection = sections.find((section) => section.id === Number(id));
    if (!detailsection) {
        return <div>Loading...</div>; 
      }
      return (
        <>
        <div className='detail_container flex'>
          <div className='detail_img'><img src={detailsection.image} alt="Section Image" /></div>
          <ul className='detail_list'>
            <h2 className='discover flex'>{detailsection.name}</h2>

            <p className='flex discover  text_gap'> {detailsection.cover ?'Advance payment required!': 'Advance payment not required!'}</p>
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
            <p className='flex flex_start text_gap' id="flex_gap"><strong>15% gratuity </strong> before taxes will be added to the bill.</p>
            <p className='discover flex  text_gap'>
                 Discover more Section
                 <img src="/detail_right_arrow.png" alt="Discover Icon" className="discover-icon" style={{ width: '1em', height: 'auto' }} />
            </p>
            <Link
                to={`/section/reserve/${detailsection.id}`}>
                   <p className='flex discover '>
                    <button className='detail_reserve flex' >
                      Book a table
                      <div className="circle-right"><p>&gt;</p></div>
                      </button>
                    </p>
                </Link>
        </ul>
        </div>
        <NavLink to="/">
          <button className='go-back-button'>
           <TiMediaPlayReverseOutline className="previous-icon" />
           </button>
        </NavLink>
        </>
      );
    }
    
    export default SectionDetail;