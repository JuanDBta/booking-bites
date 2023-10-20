import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSections } from '../redux/features/sections/sectionsSlice';

function Main() {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections);

  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);

  return (
    <div>
      <h1>Sections</h1>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>{section.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
