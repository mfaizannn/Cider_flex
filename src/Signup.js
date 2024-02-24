import React, { useState } from 'react';
import './Signup.css'; // Make sure to create a corresponding CSS file

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submit logic here, such as validation or POST request
    console.log(user);
  };

  return (
    <div className="signup-container">
      <div className="logo">
        <h1>flex<span className="logo-x">X</span></h1>
        <p>Your personal gym assistant</p>
      </div>
      <div className="signup-form">
        <h2>Sign up</h2>
        <p>Join FlexFitness to get started</p>
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
          <button type="submit">Sign up</button>
          <div className="login-link">
            Already have an account? <a href="/login">Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;