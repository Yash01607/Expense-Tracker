import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formDataInitialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [isSignUp, setisSignUp] = useState(false);
  const [formData, setformData] = useState(formDataInitialState);

  const navigate = useNavigate();

  const handleShowPassword = () =>
    setshowPassword((prevShowPasswordState) => !prevShowPasswordState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setisSignUp((prevSIgnUpSTate) => !prevSIgnUpSTate);
    setshowPassword(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        {isSignUp && (
          <>
            <div className="new-expense__control">
              <label>First Name</label>
              <input
                name="firstName"
                handleChange={handleChange}
                autoFocus={true}
                half
                type={'text'}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Last Name</label>
              <input
                name="lastName"
                handleChange={handleChange}
                half
                type={'text'}
              ></input>
            </div>
          </>
        )}
        <div className="new-expense__control">
          <label>Email Address</label>
          <input
            name="email"
            label="Email Address"
            handleChange={handleChange}
            type="email"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Password</label>
          <input
            name="password"
            handleChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
          ></input>
        </div>
        {isSignUp && (
          <div className="new-expense__control">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              handleChange={handleChange}
              type={'password'}
            ></input>
          </div>
        )}
      </div>
      <div className="new-expense__actions">
        <button type="submit"> {isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </div>

      <div className="new-expense__actions">
        <button onClick={switchMode}>
          {isSignUp
            ? 'Already have an account? Sign In'
            : 'Dont have an account? SIgn Up'}
        </button>
      </div>
    </form>
  );
};

export default Auth;
