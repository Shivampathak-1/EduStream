import React from 'react'
import Hero from '../../components/Student/Hero'
import CategoryList from '../../components/Student/CategoryList'
import TopCourseList from '../../components/Student/TopCourseList'
import Footer from '../../components/Student/Footer'
import Testimonial from '../../components/Student/Testimonial'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow">
        <Hero />
        <CategoryList />
        <TopCourseList />
        <Testimonial/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
