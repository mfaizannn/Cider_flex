// Login.js
import React, { useState } from 'react';
import './Login.css';
import Signup from './Signup';
function Login({onSignUpClick}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Email:', email, 'Password:', password, 'Remember me:', rememberMe);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Log in</h1>
        <p>Sign in to FLEX!</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div className="form-group">
            <input 
              type="checkbox" 
              id="rememberMe" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="signin-button">Sign in</button>
          <a href="#" className="forgot-password">Forgot your password?</a>
        </form>
        <div className="signup-link">
            New user? <a onClick={onSignUpClick}>Sign up</a>
        </div>

      </div>
    </div>
  );
}

export default Login;
