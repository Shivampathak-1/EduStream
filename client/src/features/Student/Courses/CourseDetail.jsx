import { useParams } from "react-router-dom";
import { dummyCourses } from "../../../assets/assets";

import CourseHero from "./CourseHero";
import CourseSidebar from "./CourseSidebar";
import CourseLearnings from "./CourseLearnings";
import CourseContent from "./CourseContent";

const CourseDetail = () => {
  const { id } = useParams();

  const course = dummyCourses.find((c) => c._id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Course not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <CourseHero course={course} />

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          <CourseLearnings learnings={course.learnings} />
          <CourseContent courseContent={course.courseContent} />

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {course.courseDescription}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-2">Instructor</h2>
            <p className="font-semibold text-gray-800">Educator ID</p>
            <p className="text-sm text-gray-500">{course.educator}</p>
          </div>
        </div>

        {/* RIGHT */}
        <CourseSidebar course={course} />
      </div>
    </div>
  );
};

export default CourseDetail;
