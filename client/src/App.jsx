import { Routes, Route } from "react-router-dom";

import StudentLayout from "./components/Layouts/StudentLayout";
import EducatorLayout from "./components/Layouts/EducatorLayout";
// import AdminLayout from "./layouts/AdminLayout";

import Home from "./features/student/Home";
import CoursesList from "./features/Student/Courses/CoursesList";
import CourseDetail from "./features/Student/Courses/CourseDetail";
import MyLearning from "./features/Student/MyLearning";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";

import Dashboard from "./features/Educator/Dashboard/Dashboard";
import CreateCourse from "./features/Educator/Courses/CreateCourse";
import MyCourses from "./features/Educator/Courses/MyCourses";

const App = () => {
  return (
    <Routes>
      {/* Public / Student */}
      <Route element={<StudentLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/my-learning" element={<MyLearning />} />
      </Route>

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Educator */}
      <Route path="/educator/*" element={<EducatorLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="create-course" element={<CreateCourse />} />
        <Route path="my-courses" element={<MyCourses />} />
      </Route>
    </Routes>
  );
};

export default App;
