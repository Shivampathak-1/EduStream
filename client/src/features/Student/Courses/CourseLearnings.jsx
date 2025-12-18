const CourseLearnings = ({ learnings }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">What you’ll learn</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
        {learnings.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseLearnings;
