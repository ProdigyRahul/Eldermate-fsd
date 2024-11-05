import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import log from '../assets/Login.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const loginData = { email, password };

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      alert('An error occurred during login.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-[#fdf9f4] items-center">

      <div className="flex-1 flex items-center justify-center md:ml-12 md:mt-12 max-w-md">
        <img src={log} alt="Login Illustration" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex justify-center items-center p-4">
        <div className="bg-white font-serif p-8 rounded-lg shadow-lg w-full max-w-md text-[#517f68]"> {/* Set bg-white for the login box */}
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-left mb-2 font-bold">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none"
            />

            <label htmlFor="password" className="block text-left mb-2 font-bold">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none"
            />

            <button type="submit" className="block text-center w-full p-3 bg-green-700 text-white rounded hover:bg-gray-300">
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            New to ElderMate? <Link to='/register' className="text-green-700 underline">Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
