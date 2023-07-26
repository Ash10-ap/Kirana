import React, { useState } from 'react';
import axios from 'axios';
import './css/login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Password validation
    if (!password || password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }

    const api = `https://api.example.com/login?email=${email}&p=${password}`;

    try{
      const response = await axios.get(api);
      
      if(response.data.success){
        window.alert("success")
      }else{
        window.alert("failed")
      }
    }catch(err){
      console.log(err);
    }

    // Reset the form after successful login
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div>
            <label htmlFor="username">Email</label>
            <input
              className={emailError ? 'error' : ''}
              id="username"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          {/* Password input */}
          <div>
            <label htmlFor="password">Password</label>
            <input
              className={passwordError ? 'error' : ''}
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          {/* Submit button */}
          <button type="submit">Log In</button>
        </form>
        {/* Forgot password link */}
        <div className="forgot-password-link">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
