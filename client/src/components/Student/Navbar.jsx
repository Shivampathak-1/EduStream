import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom"; // for navigation

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      navigate("/login"); // Go to login page
    } else {
      setDropdown(!dropdown); // Toggle dropdown if already logged in
    }
  };

  return (
    <nav className="h-16 w-full flex items-center justify-between px-6 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={assets.edustream_logo}
          alt="EduStream Logo"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Search */}
      <div className="hidden md:flex w-1/3 items-center border-2 border-gray-300 rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-8 font-medium text-base lg:text-lg">
        <a href="/" className="hover:text-blue-900 transition-all">Home</a>
        <a href="/courses" className="hover:text-blue-900 transition-all">Courses</a>
        <a href="/careers" className="hover:text-blue-900 transition-all">Careers</a>
        <a href="/about" className="hover:text-blue-900 transition-all">About Us</a>
      </div>

      {/* Login / Profile */}
      <div className="hidden md:block relative">
        <button
          className="bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
          onClick={handleLoginClick}
        >
          {isLoggedIn ? "Profile" : "Log In"}
        </button>

        {isLoggedIn && dropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-md z-10">
            <a href="#profile" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
            <a href="#settings" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
            <a
              href="#logout"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setIsLoggedIn(false)}
            >
              Log Out
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
