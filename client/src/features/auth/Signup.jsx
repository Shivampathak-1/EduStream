import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { assets } from "../../assets/assets";

import SignupStepEmailOrPhone from "./SignupStepEmailOrPhone";
import SignupStepOtp from "./SignupStepOtp";
import SignupStepPassword from "./SignupStepPassword";
import SignupStepName from "./SignupStepName";
import SignupStepProgress from "./SignupStepProgress";

const TOTAL_STEPS = 4;

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    contact: "", // email or phone
    password: "",
    confirmPassword: "",
    name: "",
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFinalSignup = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // 🔐 Replace with API later
    login({
      token: "dummy-access-token",
      role: "student",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={assets.edustream_logo}
            alt="EduStream"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Progress */}
        <SignupStepProgress step={step} total={TOTAL_STEPS} />

        {/* STEP 1 — Email / Phone */}
        {step === 1 && (
          <SignupStepEmailOrPhone
            value={form.contact}
            onChange={handleChange}
            onNext={next}
          />
        )}

        {/* STEP 2 — OTP (self-contained) */}
        {step === 2 && (
          <SignupStepOtp
            contact={form.contact}
            onVerified={next} // 👈 important
            onBack={back}
          />
        )}

        {/* STEP 3 — Password */}
        {step === 3 && (
          <SignupStepPassword
            form={form}
            onChange={handleChange}
            onBack={back}
            onSubmit={next}
          />
        )}

        {/* STEP 4 — Name */}
        {step === 4 && (
          <SignupStepName
            value={form.name}
            onChange={handleChange}
            onBack={back}
            onSubmit={handleFinalSignup}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
