import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // hamburger & close icon
import Button from "./Button";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setDropdown(!dropdown);
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

      {/* Search (Desktop Only) */}
      <div className="hidden md:flex w-1/3 items-center border-2 border-gray-300 rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Links (Desktop Only) */}
      <div className="hidden md:flex space-x-8 font-medium text-base lg:text-lg">
        <a href="/" className="hover:text-blue-900 transition-all">
          Home
        </a>
        <a href="/courses" className="hover:text-blue-900 transition-all">
          Courses
        </a>
        <a href="/careers" className="hover:text-blue-900 transition-all">
          Careers
        </a>
        <a href="/about" className="hover:text-blue-900 transition-all">
          About Us
        </a>
      </div>

      {/* Login / Profile (Desktop Only) */}
      <div className="hidden md:block relative">
        <Button onClick={handleLoginClick} color="blue" size="md">
          {isLoggedIn ? "Profile" : "Log In"}
        </Button>

        {isLoggedIn && dropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-md z-10">
            <a href="#profile" className="block px-4 py-2 hover:bg-gray-200">
              Profile
            </a>
            <a href="#settings" className="block px-4 py-2 hover:bg-gray-200">
              Settings
            </a>
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

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-4 z-20 md:hidden">
          <a href="/" className="hover:text-blue-900">
            Home
          </a>
          <a href="/courses" className="hover:text-blue-900">
            Courses
          </a>
          <a href="/careers" className="hover:text-blue-900">
            Careers
          </a>
          <a href="/about" className="hover:text-blue-900">
            About Us
          </a>
          <Button
            color="blue"
            size="md"
            className="w-full"
            onClick={handleLoginClick}
          >
            {isLoggedIn ? "Profile" : "Log In"}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
