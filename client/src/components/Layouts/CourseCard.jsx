import React from "react";
import { assets } from "../../assets/assets";

const CourseCard = ({
  thumbnail,
  title,
  instructor,
  rating,
  students,
  hours,
  lectures,
  level,
  price,
  originalPrice,
}) => {
  return (
    <div className="bg-white cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 transform hover:scale-105 ">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={thumbnail || assets.course_1_thumbnail}
          alt={title || "Course"}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
        />
        {/* <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ₹{price || "Free"}
        </span> */}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[50px]">
          {title || "Untitled Course"}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          By {instructor || "Unknown Instructor"}
        </p>

        <div className="flex items-center gap-8">
          {/* Rating */}
          <div className="flex items-center mt-3 text-sm">
            <img src={assets.star} alt="star" className="w-4 h-4" />
            <span className="ml-1 font-semibold text-yellow-600">
              {rating || "N/A"}
            </span>
            <span className="ml-2 text-gray-500">
              ({students || 0} students)
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-3">
            <span>{hours || 0} hrs</span>
            <span>• {lectures || 0} lectures</span>
            <span>• {level || "All Levels"}</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-blue-600">₹{price || 0}</span>
          <span className="text-sm text-gray-500 line-through">
            ₹{originalPrice || ""}
          </span>
          {originalPrice && price && (
            <span className="text-sm text-green-600 font-semibold">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% off
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
