import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CourseCard from "../Layouts/CourseCard";
import { assets } from "../../assets/assets";
import Button from "../Common/Button";

// Reusable scroll animation
const AnimatedInView = ({
  children,
  delay = 0,
  hidden = { opacity: 0, y: 50 },
  visible = { opacity: 1, y: 0 },
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        ...visible,
        transition: { duration: 0.6, ease: "easeOut", delay },
      });
    } else {
      controls.start(hidden);
    }
  }, [inView, controls, delay, hidden, visible]);

  return (
    <motion.div ref={ref} initial={hidden} animate={controls}>
      {children}
    </motion.div>
  );
};

const TopCourseList = () => {
  const [showAll, setShowAll] = useState(false);

  const courses = [
    {
      thumbnail: assets.course_1_thumbnail,
      title: "Mastering JavaScript from Scratch",
      instructor: "John Doe",
      rating: 4.8,
      students: 3200,
      hours: 12,
      lectures: 95,
      level: "Beginner",
      price: 499,
      originalPrice: 1999,
    },
    {
      thumbnail: assets.course_2_thumbnail,
      title: "React & TailwindCSS for Modern Web Apps",
      instructor: "Jane Smith",
      rating: 4.7,
      students: 2500,
      hours: 14,
      lectures: 110,
      level: "Intermediate",
      price: 699,
      originalPrice: 2499,
    },
    {
      thumbnail: assets.course_3_thumbnail,
      title: "Python for Data Science & Machine Learning",
      instructor: "Alex Johnson",
      rating: 4.9,
      students: 5000,
      hours: 20,
      lectures: 150,
      level: "Advanced",
      price: 999,
      originalPrice: 2999,
    },
    // duplicate for demo
    ...Array(7).fill({
      thumbnail: assets.course_1_thumbnail,
      title: "Sample Course",
      instructor: "Instructor",
      rating: 4.5,
      students: 1000,
      hours: 10,
      lectures: 50,
      level: "Beginner",
      price: 399,
      originalPrice: 1499,
    }),
  ];

  const visibleCourses = showAll ? courses.slice(0, 9) : courses.slice(0, 3);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-28">
      {/* Section Header */}
      <AnimatedInView
        hidden={{ opacity: 0, y: -20 }}
        visible={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-left">
            Explore our top courses
          </h2>
          <Button
            onClick={() => setShowAll(!showAll)}
            color="primary"
            size="md"
            className="mt-4 sm:mt-0"
          >
            {showAll ? "Show Less" : "See All"}
          </Button>
        </div>
      </AnimatedInView>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCourses.map((course, index) => (
          <AnimatedInView key={index} delay={index * 0.18}>
            <CourseCard {...course} />
          </AnimatedInView>
        ))}
      </div>
    </section>
  );
};

export default TopCourseList;
