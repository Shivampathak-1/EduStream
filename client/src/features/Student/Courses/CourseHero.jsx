import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdUpdate, MdOutlinePeopleAlt } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseHero = ({ course }) => {
  const avgRating =
    course.courseRatings.reduce((a, b) => a + b.rating, 0) /
    course.courseRatings.length;

  // ⭐ Star calculation
  const fullStars = Math.floor(avgRating);
  const hasHalfStar = avgRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold">{course.courseTitle}</h1>
        <p className="mt-3 text-blue-50 text-lg">{course.courseSubTitle}</p>

        <div className="mt-6 text-sm">
          Created by
          <Link to="/" className="text-blue-300 ml-1 hover:underline">
            {course.educator}
          </Link>
        </div>

        {/* Meta Info */}
        <div className="flex mt-5 items-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <MdUpdate size={18} />
            Last updated{" "}
            {new Date(course.updatedAt).toLocaleDateString("en-GB")}
          </div>

          <div className="flex items-center gap-2">
            <BsGlobe2 />
            {course.language || "English"}
          </div>
        </div>
        {/* ⭐ Rating + Learners (Udemy Style) */}
        <div className="flex items-center mt-5 text-sm text-gray-200">
          {/* Rating */}
          <div className="flex flex-col items-center pr-6">
            <span className="text-2xl font-bold text-white">
              {avgRating.toFixed(1)}
            </span>

            <div className="flex items-center text-yellow-400 gap-0.5">
              {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} size={14} />
              ))}
              {hasHalfStar && <FaStarHalfAlt size={14} />}
              {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} size={14} />
              ))}
            </div>

            <span className="text-blue-300 underline cursor-pointer mt-1">
              {course.courseRatings.length.toLocaleString()} ratings
            </span>
          </div>

          {/* Divider */}
          <div className="h-16 w-px bg-blue-300/40 mx-6" />

          {/* Learners */}
          <div className="flex flex-col items-center">
            <MdOutlinePeopleAlt size={26} />
            <span className="font-semibold text-white mt-1">
              {course.enrolledStudents.length.toLocaleString()}
            </span>
            <span className="text-blue-300">learners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
