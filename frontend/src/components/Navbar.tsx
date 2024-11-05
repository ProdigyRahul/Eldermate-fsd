import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#fdf9f4] bg-opacity-90 shadow-md">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Eldermate Logo"
                className="w-[180px] h-[40px] object-contain" 
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex p-2 text-gray-800 transition duration-200 rounded-md lg:hidden focus:outline-none hover:bg-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Links */}
          <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} space-y-4 lg:space-y-0 lg:space-x-8 text-center lg:text-left`}>
            {['About', 'Events', 'Services', 'Testimonials', 'Connections', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-base text-gray-800 transition duration-200 hover:text-gray-600"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/login"
              className="text-base text-gray-800 transition duration-200 hover:text-gray-600"
            >
              Login
            </Link>
            <Link
  to="/register"
  className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white transition duration-200 bg-[#517f68] rounded-full transform hover:scale-110 hover:text-white">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
