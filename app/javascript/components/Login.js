import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/features/users/usersSlice';

const Login = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await dispatch(fetchUser(userName));
     
      
      navigate('/home'); 
    } catch (error) {

    }
  };

  return (
<form action="log-in" method="post" className="form-container">
      <div className="login-container">
        <input
          className="username-field"
          type="text"
          name="loginUserName"
          id="loginUserName"
          placeholder='enter your username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="button-log-container" />
      <button
        type="button"
        className="login-button"
        onClick={handleLogin}
      >
        Log In
      </button>
      <div className="register-container">
        <p className="member-text">
          Not a member?
          <Link to="/register" className="register-link">Register</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;