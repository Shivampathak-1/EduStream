import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Replace with actual signup logic
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Join EduStream and start your learning journey
        </p>

        {/* Form */}
        <form onSubmit={handleSignup} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Signup button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 shadow-md transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition"
          >
            <FcGoogle className="text-xl mr-2" /> Continue with Google
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition"
          >
            <FaGithub className="text-xl mr-2" /> Continue with GitHub
          </button>
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
