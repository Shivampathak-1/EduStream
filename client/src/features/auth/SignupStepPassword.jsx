import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupStepPassword = ({ form, onChange, onBack, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Secure your account</h2>
      <p className="text-center text-gray-500 mt-2">
        Create a strong password to protect your account
      </p>

      {/* Password */}
      <div className="relative mt-6">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Create a password"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative mt-4">
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onChange}
          placeholder="Confirm password"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-10"
        />
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={onBack}
          className="w-1/2 border py-2 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!form.password || !form.confirmPassword}
          className="w-1/2 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          Create Account
        </button>
      </div>
    </>
  );
};

export default SignupStepPassword;
