import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignupStepEmailOrPhone = ({ value, onChange, onNext }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("email"); // email | phone

  return (
    <>
      <h2 className="text-2xl font-bold text-center">
        Enter your {mode === "email" ? "email" : "phone number"}
      </h2>

      <p className="text-center text-gray-500 mt-2">
        We’ll send you a verification code
      </p>

      {/* Toggle */}
      <div className="flex justify-center mt-5">
        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setMode("email")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              mode === "email"
                ? "bg-white shadow text-blue-600"
                : "text-gray-500"
            }`}
          >
            Email
          </button>
          <button
            onClick={() => setMode("phone")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              mode === "phone"
                ? "bg-white shadow text-blue-600"
                : "text-gray-500"
            }`}
          >
            Phone
          </button>
        </div>
      </div>

      {/* Input */}
      {mode === "email" ? (
        <input
          type="email"
          name="contact"
          value={value}
          onChange={onChange}
          placeholder="you@example.com"
          className="mt-6 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      ) : (
        <div className="mt-6 flex gap-2">
          {/* Country Code */}
          <select className="px-3 py-2 border rounded-lg bg-white">
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
          </select>

          <input
            type="tel"
            name="contact"
            value={value}
            onChange={onChange}
            placeholder="Phone number"
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      )}

      {/* CTA */}
      <button
        onClick={onNext}
        disabled={
          !value ||
          (mode === "email" && !/\S+@\S+\.\S+/.test(value)) ||
          (mode === "phone" && !/^\d{10}$/.test(value))
        }
        className="mt-6 w-full py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
      >
        Send OTP
      </button>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-1 border-gray-300" />
        <span className="px-3 text-sm text-gray-500">OR</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      {/* OAuth */}
      <div className="flex justify-center gap-4">
        <button className="h-12 w-12 border rounded-full flex items-center justify-center hover:bg-gray-100">
          <FcGoogle size={20} />
        </button>
        <button className="h-12 w-12 border rounded-full flex items-center justify-center hover:bg-gray-100">
          <FaGithub size={20} />
        </button>
      </div>

      {/* Login */}
      <p className="mt-5 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-blue-600 font-semibold hover:underline"
        >
          Log in
        </button>
      </p>
    </>
  );
};

export default SignupStepEmailOrPhone;
