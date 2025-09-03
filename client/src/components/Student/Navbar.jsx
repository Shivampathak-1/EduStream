import React, { useState } from 'react';
import {assets} from '../../assets/assets'
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="navbar h-16 w-full flex justify-between items-center px-6 bg-white shadow-md">
      {/* Logo */}
      <div className="logo text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-all">
        <img className='h-12 w-45' src={assets.edustream_logo} alt="" />
      </div>

      {/* Search Box */}
      <div className="search w-1/3 flex items-center border-2 border-gray-300 rounded-full px-4 py-2 transition-all">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Navigation Links */}
      <div className="nav-links flex space-x-8 font-medium" style={{fontSize : "1.2vw"}}>
        <a
          href="#home"
          className="hover:text-blue-900 transition-all"
        >
          Home
        </a>
        <a
          href="#courses"
          className="hover:text-blue-900 transition-all"
        >
          Courses
        </a>
        <a
          href="#courses"
          className="hover:text-blue-900 transition-all"
        >
          Careers
        </a>
        <a
          href="#about"
          className="hover:text-blue-900 transition-all"
        >
          About Us
        </a>
      </div>

      {/* Login/Profile Button */}
      <div
        className="profile relative cursor-pointer"
        onClick={() => setDropdown(!dropdown)}
      >
        <button className="bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all">
          Log In
        </button>

        {/* Dropdown Menu */}
        {dropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white border-2 border-gray-300 rounded-lg shadow-md z-10">
            <a href="#profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Profile
            </a>
            <a href="#settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Settings
            </a>
            <a href="#logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Log Out
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
