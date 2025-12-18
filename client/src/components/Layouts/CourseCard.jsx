import React from "react";
import { assets } from "../../assets/assets";
import Button from "../Common/Button";

const CourseCard = (props) => {
  const finalPrice =
    Math.round(
      (props.coursePrice - (props.coursePrice * props.discount) / 100) * 100
    ) / 100;

  return (
    <div
      onClick={props.onClick}
      className="bg-white cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 transform hover:scale-105 "
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={props.courseThumbnail || assets.course_1_thumbnail}
          alt={props.courseTitle || "Course"}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[50px]">
          {props.courseTitle || "Untitled Course"}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          By {props.educator || "Unknown Instructor"}
        </p>

        <div className="flex justify-between items-center gap-8">
          {/* Rating */}
          <div className="flex items-center mt-3 text-sm">
            <img src={assets.star} alt="star" className="w-4 h-4" />
            <span className="ml-1 font-semibold text-yellow-600">
              {4.5 || "N/A"}
            </span>
            <span className="ml-2 text-gray-500">
              ({props.enrolledStudents && props.enrolledStudents.length}{" "}
              students)
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-3">
            <span>{15} hrs</span>
            <span>
              • {props.courseContent && props.courseContent.length} lectures
            </span>
            <span>• {"All Levels"}</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-blue-600">
            ₹{finalPrice || "Free"}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ₹{props.coursePrice || ""}
          </span>
          {props.coursePrice && props.discount && (
            <span className="text-sm text-green-600 font-semibold">
              {props.discount}% off
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
