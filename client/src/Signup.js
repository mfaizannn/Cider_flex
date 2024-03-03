import React, { useState } from 'react';
import Login from './Login';
import './Signup.css'; // Make sure the CSS file is in the same directory
import logo from './flexlogo.png';
const Signup = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission to your backend
    console.log(user);
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-logo-section">
        <div className="logo">
          <img src = {logo} alt="logo" />
        </div>
      </div>
      <div className="signup-form-section">
        <h2>Sign up</h2>
        <p>Join FleX to get started</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Your full name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Enter your email address" onChange={handleChange} />
          <input type="text" name="username" placeholder="Create a username" onChange={handleChange} />
          <input type="password" name="password" placeholder="Create a strong password" onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm your password" onChange={handleChange} />
          <div className="terms">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">By signing up, you agree to our Terms and Privacy Policy.</label>
          </div>
          <button type="submit" className="signup-button">Sign up</button>
        </form>
        <div className="signin-redirect">
          Already have an account? <a href="<Login />">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
