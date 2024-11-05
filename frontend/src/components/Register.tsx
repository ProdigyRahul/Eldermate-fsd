import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reg from '../assets/register1.jpg';
import logo from '../assets/logo2.png';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const registrationData = {
      email,
      password,
    };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      alert('An error occurred during registration.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-[#fdf9f4] gap-4 md:gap-10">
      <div className="flex flex-1 items-center justify-center p-4">
        <img src={reg} className="w-full h-full object-cover rounded-lg" alt="Register" />
      </div>

      <div className="flex flex-1 items-center justify-center p-4 bg-[#f8f8f8]">
        <div className="bg-[#f8f8f8] font-serif p-8 rounded-lg shadow-lg w-full max-w-md text-[#517f68]">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="email" className="block text-left font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b755f]"
            />

            <label htmlFor="password" className="block text-left font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b755f]"
            />

            <Link to="/completeProfile" className="w-full block text-center bg-[#3b755f] text-white p-3 rounded-lg transition duration-300 hover:bg-gray-400">
              Register
            </Link>
          </form>
          <p className="mt-4 text-center">
            Already registered?{' '}
            <Link to="/login" className="text-[#3b755f] hover:underline">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

