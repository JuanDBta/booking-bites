import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/features/users/usersSlice';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const data = {
      name,
      username: userName,
    };
    dispatch(createUser(data));
  };
  return (
    <form action="log-in" method="post">
      <div className="form-outline mb-4">
        <input
          className="form-control"
          type="text"
          name="registerName"
          id="registerName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label
          htmlFor="registerName"
          className="form-label"
        >
          Name
        </label>
      </div>
      <div className="form-outline mb-4">
        <input
          className="form-control"
          type="text"
          name="registerUserName"
          id="registerUserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label
          htmlFor="registerUserName"
          className="form-label"
        >
          Username
        </label>
      </div>
      <button
        type="button"
        className="btn btn-block mb-3"
        onClick={handleSubmit}
      >
        Sign in
      </button>
    </form>
  );
};

export default RegisterUser;