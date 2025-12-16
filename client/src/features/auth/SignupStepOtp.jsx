import { useEffect, useRef, useState } from "react";

const OTP_LENGTH = 6;
const RESEND_TIME = 30;
const DUMMY_OTP = "123456"; // dummy for now

const SignupStepOtp = ({ contact, onVerified, onBack }) => {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(RESEND_TIME);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ⏱ Resend timer */
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  /* 🔢 OTP input handling */
  const handleChange = (e, index) => {
    const digit = e.target.value.replace(/\D/, "");
    if (!digit) return;

    const otpArray = otp.split("");
    otpArray[index] = digit;

    const updatedOtp = otpArray.join("");
    setOtp(updatedOtp);
    setError("");

    if (index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const otpArray = otp.split("");
      otpArray[index] = "";
      setOtp(otpArray.join(""));

      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  /* ✅ Dummy OTP verification */
  const verifyOtp = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (otp === DUMMY_OTP) {
        onVerified(); // 👉 move to next step
      } else {
        setError("Invalid OTP. Please try again.");
      }
      setLoading(false);
    }, 1000);
  };

  /* 🔄 Resend OTP */
  const resendOtp = () => {
    setOtp("");
    setTimer(RESEND_TIME);
    setCanResend(false);
    setError("");
    inputsRef.current[0]?.focus();
    // 🔐 API call later
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
      <p className="text-center text-gray-500 mt-2">
        Enter the 6-digit code sent to{" "}
        <span className="font-medium">{contact}</span>
      </p>

      {/* OTP Boxes */}
      <div className="mt-6 flex justify-center gap-3">
        {Array.from({ length: OTP_LENGTH }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength={1}
            value={otp[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`w-12 h-12 text-center text-lg font-semibold border rounded-lg outline-none
              ${error ? "border-red-500" : "focus:ring-2 focus:ring-blue-500"}`}
          />
        ))}
      </div>

      {/* Error */}
      {error && (
        <p className="mt-3 text-sm text-red-600 text-center">{error}</p>
      )}

      {/* Resend */}
      <div className="mt-4 text-center text-sm text-gray-600">
        {canResend ? (
          <button
            onClick={resendOtp}
            className="text-blue-600 font-semibold hover:underline"
          >
            Resend OTP
          </button>
        ) : (
          <span>Resend OTP in {timer}s</span>
        )}
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={onBack}
          disabled={loading}
          className="w-1/2 border py-2 rounded-lg hover:bg-gray-50 disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={verifyOtp}
          disabled={otp.length !== OTP_LENGTH || loading}
          className="w-1/2 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </div>
    </>
  );
};

export default SignupStepOtp;
