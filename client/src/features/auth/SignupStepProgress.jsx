const SignupStepProgress = ({ step, total }) => {
  return (
    <div className="flex justify-center mb-6 space-x-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 w-10 rounded-full ${
            step > i ? "bg-blue-600" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default SignupStepProgress;
