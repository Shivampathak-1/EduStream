const SignupStepName = ({ value, onChange, onBack, onSubmit }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">Your name</h2>

      <input
        name="name"
        value={value}
        onChange={onChange}
        placeholder="Enter your full name"
        className="mt-6 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <div className="mt-6 flex gap-3">
        <button
          onClick={onBack}
          className="w-1/2 border py-2 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>

        <button
          onClick={onSubmit}
          disabled={!value.trim()}
          className="w-1/2 bg-blue-600 text-white py-2 rounded-lg disabled:opacity-50"
        >
          Create Account
        </button>
      </div>
    </>
  );
};

export default SignupStepName;
