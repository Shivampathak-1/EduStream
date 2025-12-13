import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with actual auth logic
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500 mt-2">
          Log in to your account to continue
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
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

          {/* Forgot password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 shadow-md transition"
          >
            Log In
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

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
