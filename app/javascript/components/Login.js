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
  const loggedInUser = useSelector((state) => state.users);
  console.log(loggedInUser)
  return (
<form action="log-in" method="post">
      <div className="form-outline mb-4">
        <input
          className="form-control"
          type="text"
          name="loginUserName"
          id="loginUserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label
          htmlFor="loginUserName"
          className="form-label"
        >
          Username
        </label>
      </div>
      <div className="row mb-4" />
      <button
        type="button"
        className="btn btn-block mb-4"
        onClick={handleLogin}
      >
        Log in
      </button>
      <div className="text-center">
        <p>
          Not a member?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;