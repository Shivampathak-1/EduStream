import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CategoryCard from "../Layouts/CategoryCard";
import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaBusinessTime,
  FaDatabase,
  FaBullhorn,
} from "react-icons/fa";
import Button from "../Common/Button";

/** Re-animates on every re-entry */
const AnimatedInView = ({
  children,
  delay = 0,
  hidden = { opacity: 0, y: 50 },
  visible = { opacity: 1, y: 0 },
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 }); // 30% visible to trigger
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        ...visible,
        transition: { duration: 0.6, ease: "easeOut", delay },
      });
    } else {
      controls.start(hidden); // reset when out of view so it can replay
    }
  }, [inView, controls, delay, hidden, visible]);

  return (
    <motion.div ref={ref} initial={hidden} animate={controls}>
      {children}
    </motion.div>
  );
};

const CategoryList = () => {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    {
      icon: <FaCode />,
      title: "Programming",
      description: "Master coding skills from beginner to advanced.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Design",
      description: "Unleash your creativity with top design courses.",
    },
    {
      icon: <FaChartLine />,
      title: "Marketing",
      description: "Learn marketing strategies to grow your business.",
    },
    {
      icon: <FaBusinessTime />,
      title: "Business",
      description: "Enhance your business and management skills.",
    },
    {
      icon: <FaDatabase />,
      title: "Data Science",
      description: "Analyze and visualize data like a pro.",
    },
    {
      icon: <FaBullhorn />,
      title: "Communication",
      description: "Improve public speaking and communication skills.",
    },
  ];

  // Show only 1 row (4 items) initially, max 3 rows (12 items) on "See All"
  const visibleCategories = showAll
    ? categories.slice(0, 12)
    : categories.slice(0, 4);

  return (
    <section className="px-6 md:px-12 lg:px-28 py-12 bg-white">
      {/* Header */}
      <AnimatedInView
        hidden={{ opacity: 0, y: -20 }}
        visible={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-left">
            Explore our top categories
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleCategories.map((cat, i) => (
          <AnimatedInView key={cat.title} delay={i * 0.08}>
            <CategoryCard
              icon={cat.icon}
              title={cat.title}
              description={cat.description}
            />
          </AnimatedInView>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
