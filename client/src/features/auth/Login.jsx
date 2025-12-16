import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { assets } from "../../assets/assets";
import Button from "../../components/Common/Button";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔐 Replace with real API later
    login({
      token: "dummy-access-token",
      role: "student",
    });

    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Back & Logo */}
          <FaArrowLeftLong
            className="text-gray-600 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex justify-center mb-6">
            <img
              src={assets.edustream_logo}
              alt="EduStream Logo"
              className="h-12 cursor-pointer"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Log in to your account
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="mt-2 space-y-2">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Forgot */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <Button color="primary" className="w-full" type="submit">
              Log In
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-sm text-gray-500">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* OAuth */}
          <div className="flex justify-center gap-3 space-y-3">
            <button className=" h-14 border rounded-4xl py-2 px-4 hover:bg-gray-100 transition">
              <FcGoogle size={20} />
            </button>

            <button className=" h-14 border rounded-4xl py-2 px-4 hover:bg-gray-50 transition">
              <FaGithub size={20} />
            </button>
          </div>

          {/* Signup */}
          <p className="mt-2 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
