import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
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

    // Perform login logic here if all validations pass
    // For demonstration purposes, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form after successful login
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col sm:flex-row shadow-lg rounded-lg w-full sm:w-4/5 md:w-3/5 lg:w-1/2 bg-slate-100">
        {/* First div with image */}
        <div className="sm:w-1/2 md:w-1/3 bg-black h-[50vh]">
          <img className="w-full h-full object-fill " src="https://placekitten.com/400/400" alt="Profile" />
        </div>
        {/* Second div with login form */}
        <div className="sm:w-1/2 md:w-2/3 flex flex-col justify-center p-6">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm text-left font-bold" htmlFor="username">
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  emailError ? 'border-red-500' : ''
                }`}
                id="username"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  passwordError ? 'border-red-500' : ''
                }`}
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Log In
            </button>
          </form>
          <div className="text-center mt-4">
            <a className="text-blue-500" href="/forgot-password">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
