import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSections } from '../redux/features/sections/sectionsSlice';
import '../../assets/stylesheets/main.css';
import { TiMediaPlayOutline } from "react-icons/ti";
import { TiMediaPlayReverseOutline } from "react-icons/ti";

function Main() {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionsPerPage = 3;

  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < sections.length - sectionsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleSections = sections.slice(currentIndex, currentIndex + sectionsPerPage);

  return (
    <div className="main">
      <h1 className="title">LATEST SECTIONS</h1>
      <h3 className="title-description">Please select a section</h3>
      <div className="dotted-line"></div>
      <div className="sections-list">
        <div className={`prev-button-container ${currentIndex === 0 ? 'disabled' : ''}`}>
          <button className={`prev-button ${currentIndex === 0 ? 'disabled' : ''}`} onClick={handlePrevClick} disabled={currentIndex === 0}>
            <TiMediaPlayReverseOutline className="previous-icon" />
          </button>
        </div>
        {visibleSections.map((section, index) => (
          <div key={section.id} className={`section ${index === 0 ? 'first-section' : index === 2 ? 'third-section' : ''}`}>
            <Link to={`/sections/${section.id}`} key={section.id}>
            <img src={section.image} className="image" alt="image" />
            <div className="name">{section.name}</div>
            <div className="dotted-line-desc"></div>
            <div className="description">{section.description}</div>
            <div className="media-links">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/facebook.svg" className="icon" alt="Facebook" />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="/twitter.svg" className="icon" alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.svg" className="icon" alt="Instagram" />
              </a>
            </div>
            </Link>
          </div>
        ))}
        <div className={`next-button-container ${currentIndex === sections.length - sectionsPerPage ? 'disabled' : ''}`}>
          <button  className={`next-button ${currentIndex === sections.length - sectionsPerPage ? 'disabled' : ''}`} onClick={handleNextClick} disabled={currentIndex === sections.length - sectionsPerPage}>
            <TiMediaPlayOutline className="next-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
