import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reg from '../assets/register1.jpg';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

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
    <div className="flex flex-col md:flex-row w-full h-screen bg-[#fdf9f4] overflow-hidden">
      <div className="flex flex-1 items-center justify-center p-4">
        <img src={reg} className="max-w-full max-h-[80vh] object-cover rounded-lg" alt="Register" />
      </div>

      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white font-roboto p-8 rounded-lg shadow-lg w-full max-w-md text-[#517f68]">
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
              className="w-full p-3 border border-[#517f68] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517f68] transition duration-200"
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
              className="w-full p-3 border border-[#517f68] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517f68] transition duration-200"
            />

            <button
              type="submit"
              className="block w-full p-3 bg-[#517f68] text-white rounded-lg transition duration-200 hover:bg-[#3f6b5a] transform hover:scale-105"
            >
              <Link to='/completeProfile'>Register</Link>

            </button>
          </form>
          <p className="mt-4 text-center">
            Already registered?{' '}
            <Link to="/login" className="text-[#517f68] hover:underline font-bold">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
