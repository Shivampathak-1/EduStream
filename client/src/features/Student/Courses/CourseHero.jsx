import { FaStar } from "react-icons/fa";

const CourseHero = ({ course }) => {
  const avgRating =
    course.courseRatings.reduce((a, b) => a + b.rating, 0) /
    course.courseRatings.length;

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold">{course.courseTitle}</h1>
        <p className="mt-3 text-blue-100 text-lg">{course.courseSubTitle}</p>

        <div className="flex items-center gap-3 mt-4">
          <span className="font-semibold">{avgRating.toFixed(1)}</span>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>
          <span className="text-sm text-blue-200">
            ({course.enrolledStudents.length} students)
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
