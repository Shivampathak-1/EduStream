import CourseHero from "./CourseHero";
import CourseSidebar from "./CourseSidebar";
import CourseLearnings from "./CourseLearnings";
import CourseContent from "./CourseContent";

const course = {
  _id: "605c72efb3f1c2b1f8e4e1a1",
  courseTitle: "Introduction to JavaScript",
  courseSubTitle: "Fill this",
  courseDescription:
    "Learn the Basics of JavaScript JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
  coursePrice: 499.99,
  isPublished: true,
  discount: 20,
  learnings: [
    "Build modern React applications",
    "Understand hooks & context API",
    "Create reusable components",
    "Handle authentication",
    "Optimize React performance",
    "Deploy React apps",
  ],
  courseContent: [
    {
      chapterId: "chapter1",
      chapterOrder: 1,
      chapterTitle: "Getting Started with JavaScript",
      chapterContent: [
        {
          lectureId: "lecture1",
          lectureTitle: "What is JavaScript?",
          lectureDuration: 16,
          lectureUrl: "https://youtu.be/CBWnBi-awSA",
          isPreviewFree: true,
          lectureOrder: 1,
        },
        {
          lectureId: "lecture2",
          lectureTitle: "Setting Up Your Environment",
          lectureDuration: 19,
          lectureUrl: "https://youtu.be/4l87c2aeB4I",
          isPreviewFree: false,
          lectureOrder: 2,
        },
      ],
    },
    {
      chapterId: "chapter2",
      chapterOrder: 2,
      chapterTitle: "Variables and Data Types",
      chapterContent: [
        {
          lectureId: "lecture3",
          lectureTitle: "Understanding Variables",
          lectureDuration: 20,
          lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
          isPreviewFree: true,
          lectureOrder: 1,
        },
        {
          lectureId: "lecture4",
          lectureTitle: "Data Types in JavaScript",
          lectureDuration: 10,
          lectureUrl: "https://youtu.be/ufHT2WEkkC4",
          isPreviewFree: false,
          lectureOrder: 2,
        },
      ],
    },
  ],
  educator: "675ac1512100b91a6d9b8b24",
  enrolledStudents: [
    "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
    "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
    "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
  ],
  courseRatings: [
    {
      userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      rating: 5,
      _id: "6773e37360cb0ab974342314",
    },
  ],
  createdAt: "2024-12-17T08:16:53.622Z",
  updatedAt: "2025-01-02T04:47:44.701Z",
  __v: 4,
  courseThumbnail: "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg",
};

const CourseDetail = () => {
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

            <div className="prose max-w-none text-gray-700">
              {course.courseDescription}
            </div>
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
