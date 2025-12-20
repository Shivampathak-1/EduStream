import React, { useState, useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX, HiUserCircle } from "react-icons/hi";
import Button from "./Button";
import { useAuth } from "../../context/AuthProvider";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "My Learnings", path: "/my-learning" },
    { name: "Become Educator", path: "/educator/apply" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setDropdown(false);
    navigate("/login");
  };

  return (
    <nav className="h-16 w-full flex items-center justify-between px-6 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <img
        src={assets.edustream_logo}
        alt="EduStream Logo"
        className="h-12 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 font-medium">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-white font-semibold border-2 px-4 py-2 bg-[#2767d8] rounded-lg"
                  : "text-gray-700 px-4 py-2 hover:text-blue-900 hover:border-2 hover:border-blue-600 hover:rounded-lg"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Desktop Auth */}
      <div className="hidden md:flex items-center relative" ref={dropdownRef}>
        {!isAuthenticated ? (
          // <FaRegHeart />
          <Button color="primary" size="md" onClick={() => navigate("/login")}>
            Log In
          </Button>
        ) : (
          <>
            {/* Profile Icon */}
            <HiUserCircle
              size={36}
              className="cursor-pointer text-gray-700 hover:text-blue-900"
              onClick={() => setDropdown((prev) => !prev)}
            />

            {/* Dropdown */}
            {dropdown && (
              <div className="absolute right-0 top-12 w-44 bg-white rounded-lg shadow-lg border">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdown(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Log Out
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setMobileMenu((prev) => !prev)}
      >
        {mobileMenu ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-4 md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenu(false)}
              className="text-gray-700 hover:text-blue-900"
            >
              {item.name}
            </Link>
          ))}

          {!isAuthenticated ? (
            <Button
              color="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenu(false);
                navigate("/login");
              }}
            >
              Log In
            </Button>
          ) : (
            <Button
              color="primary"
              size="md"
              className="w-full"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
