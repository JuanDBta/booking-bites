import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/features/users/usersSlice';
import '../../assets/stylesheets/navbar.css';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <>
       <button
      type="button"
      className="logout-button"
      onClick={handleLogout}
    >
      LOG OUT
    </button>

    </>
  );
};

export default Logout;