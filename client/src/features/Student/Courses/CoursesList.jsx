import React from "react";
import CourseCard from "../../../components/Layouts/CourseCard";
import Button from "../../../components/Common/Button";
import CourseSidebar from "../../../components/Layouts/CoursesSidebar";
import { dummyCourses } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

const CoursesList = () => {
  const navigate = useNavigate();
  const handleOpen = (id) => {
    navigate(`/course/${id}`);
  };
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Title */}
      <div className="text-center text-4xl font-extrabold text-gray-800 my-8">
        All Courses
      </div>
      {/* Search Bar */}
      <div className="flex justify-center items-center mb-8 px-4">
        <div className="flex w-full max-w-lg items-center border border-gray-300 rounded-full overflow-hidden shadow-sm bg-white">
          <input
            type="text"
            placeholder="Search courses..."
            className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-l-full"
          />
          <Button color="primary" size="md" className="rounded-r-full px-6">
            Search
          </Button>
        </div>
      </div>

      {/* Two-column Layout */}
      <div className="flex flex-col md:flex-row md:px-6 gap-4 pt-6 shadow-[0_-2px_6px_rgba(0,0,0,0.08)]">
        {/* Left Sidebar */}
        <CourseSidebar />

        {/* Right Courses Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
          {dummyCourses.map((course) => (
            <CourseCard
              key={course._id}
              onClick={() => handleOpen(course._id)}
              {...course}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CoursesList;
