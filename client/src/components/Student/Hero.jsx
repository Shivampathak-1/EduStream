import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";
import Button from "../Common/Button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white px-6 md:px-12 lg:px-28 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content with animation */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Learn better, <br /> anytime, anywhere
        </h1>

        <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
          Join millions of learners from anywhere with expert instructors and
          interactive tools designed to make learning engaging, flexible, and
          result-driven.
        </p>

        <p className="text-base text-gray-500 max-w-md mx-auto md:mx-0">
          Whether you want to upgrade your skills, explore new fields, or
          prepare for your dream job, EduStream offers live classes, video
          lectures, and hands-on projects — all in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button color="blue" size="lg">
            Get Started
          </Button>
          <Button color="light_gray" size="lg">
            Browse Courses
          </Button>
        </div>
      </motion.div>

      {/* Right Image with animation */}
      <motion.div
        className="flex-1 lg:ml-24 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      >
        <img
          src={assets.heroImg}
          alt="Learning Illustration"
          className="max-w-md md:max-w-lg lg:max-w-xl w-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
