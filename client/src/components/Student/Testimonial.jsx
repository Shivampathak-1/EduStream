import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Web Developer",
    message:
      "EduStream transformed my career! The instructors are amazing and the learning experience is unmatched.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    role: "UI/UX Designer",
    message:
      "I loved the flexibility of learning at my own pace. The courses are well-structured and easy to follow.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist",
    message:
      "The hands-on projects helped me apply my learning in real-world scenarios. Highly recommend EduStream!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-28">
      {/* Section Header */}
      <AnimatedInView hidden={{ opacity: 0, y: -20 }} visible={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Students Say
          </h2>
          <p className="text-gray-600 mt-2">
            Hear from learners who have transformed their careers with EduStream.
          </p>
        </div>
      </AnimatedInView>

      {/* Testimonials Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <AnimatedInView key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto border-4 border-blue-500 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
              <p className="mt-4 h-16 text-gray-600 italic">"{t.message}"</p>
            </motion.div>
          </AnimatedInView>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
