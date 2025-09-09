import React, { useState } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/Student/Home';
import CoursesList from './pages/Student/CoursesList';
import CourseDetail from './pages/Student/CourseDetail';
import EnrolledCourses from './pages/Student/EnrolledCourses';
import Player from './pages/Student/Player';
import Loading from './components/Student/Loading';
import Educator from './pages/Educator/Educator';
import Dashboard from './pages/Educator/Dashboard';
import CreateCourse from './pages/Educator/CreateCourse';
import MyCourses from './pages/Educator/MyCourses';
import Navbar from './components/Student/Navbar';
import Login from './pages/Student/Login'; // add your login page

const App = () => {
  const isEducatorRoute = useMatch('/educator/*');

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && (
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />

        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/enrolled-courses" element={<EnrolledCourses />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* Login Page */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Educator routes */}
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="create-course" element={<CreateCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
