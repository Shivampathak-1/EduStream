import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import search_icon from "./search_icon.svg";
import upload_area from "./upload_area.svg";
import sketch from "./sktech.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.svg";
import adobe_logo from "./adobe_logo.svg";
import paypal_logo from "./paypal_logo.svg";
import course_1_thumbnail from "./course_1.png";
import course_2_thumbnail from "./course_2.png";
import course_3_thumbnail from "./course_3.png";
import course_4_thumbnail from "./course_4.png";
import star from "./rating_star.svg";
import star_blank from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";
import arrow_icon from "./arrow_icon.svg";
import down_arrow_icon from "./down_arrow_icon.svg";
import time_left_clock_icon from "./time_left_clock_icon.svg";
import time_clock_icon from "./time_clock_icon.svg";
import user_icon from "./user_icon.svg";
import home_icon from "./home_icon.svg";
import add_icon from "./add_icon.svg";
import my_course_icon from "./my_course_icon.svg";
import person_tick_icon from "./person_tick_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import file_upload_icon from "./file_upload_icon.svg";
import appointments_icon from "./appointments_icon.svg";
import earning_icon from "./earning_icon.svg";
import dropdown_icon from "./dropdown_icon.svg";
import patients_icon from "./patients_icon.svg";
import play_icon from "./play_icon.svg";
import blue_tick_icon from "./blue_tick_icon.svg";
import course_4 from "./course_4.png";
import profile_img from "./profile_img.png";
import profile_img2 from "./profile_img2.png";
import profile_img3 from "./profile_img3.png";
import lesson_icon from "./lesson_icon.svg";
import edustream_logo from "./EduStream_Logo.png";
import heroImg from "./heroImg.png";
import menu_icon from "./menu-icon.svg";
import cross_icon from "./cross-icon.svg";

export const assets = {
  edustream_logo,
  heroImg,
  menu_icon,
  logo,
  search_icon,
  sketch,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  adobe_logo,
  paypal_logo,
  course_1_thumbnail,
  course_2_thumbnail,
  course_3_thumbnail,
  course_4_thumbnail,
  star,
  star_blank,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  arrow_icon,
  dropdown_icon,
  cross_icon,
  upload_area,
  logo_dark,
  down_arrow_icon,
  time_left_clock_icon,
  time_clock_icon,
  user_icon,
  home_icon,
  add_icon,
  my_course_icon,
  person_tick_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  course_4,
  file_upload_icon,
  appointments_icon,
  earning_icon,
  patients_icon,
  profile_img,
  profile_img2,
  profile_img3,
  play_icon,
  blue_tick_icon,
  lesson_icon,
};

export const dummyEducatorData = {
  _id: "675ac1512100b91a6d9b8b24",
  name: "GreatStack",
  email: "user.greatstack@gmail.com",
  imageUrl:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
  createdAt: "2024-12-12T10:56:17.930Z",
  updatedAt: "2024-12-12T10:56:17.930Z",
  __v: 0,
};

export const dummyTestimonial = [
  {
    name: "Donald Jackman",
    role: "SWE 1 @ Amazon",
    image: assets.profile_img_1,
    rating: 5,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Richard Nelson",
    role: "SWE 2 @ Samsung",
    image: assets.profile_img_2,
    rating: 4,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "James Washington",
    role: "SWE 2 @ Google",
    image: assets.profile_img_3,
    rating: 4.5,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

export const dummyDashboardData = {
  totalEarnings: 707.38,
  enrolledStudentsData: [
    {
      courseTitle: "Introduction to JavaScript",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Advanced Python Programming",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Web Development Bootcamp",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Data Science with Python",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Cybersecurity Basics",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
  ],
  totalCourses: 8,
};

export const dummyStudentEnrolled = [
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:39:55.509Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:59:49.964Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Advanced Python Programming",
    purchaseDate: "2024-12-20T11:03:42.931Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Web Development Bootcamp",
    purchaseDate: "2024-12-20T11:04:48.798Z",
  },
];

export const dummyCourses = [
  {
    _id: "605c72efb3f1c2b1f8e4e1a8",
    courseTitle:
      "Complete React Development: From Fundamentals to Advanced Patterns",
    courseSubTitle:
      "A comprehensive React course covering basics, hooks, state management, and real-world project architecture.",
    courseDescription:
      "This course is designed to take you from a beginner to an advanced React developer. You will start by understanding how React works internally and gradually move towards building complex, scalable applications. The course covers component design, hooks, state management, performance optimization, routing, and best practices used in production-grade applications. By the end of the course, you will be confident in building modern, maintainable, and high-performing React applications.",
    coursePrice: 1499.99,
    isPublished: true,
    discount: 35,
    language: "English",
    learnings: [
      "Understand React core concepts and architecture",
      "Build reusable and scalable components",
      "Master React hooks and lifecycle behavior",
      "Manage application state effectively",
      "Implement routing and navigation",
      "Optimize performance and rendering",
      "Follow best practices for large React applications",
    ],
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "React Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "How React Works",
            lectureDuration: 20,
            lectureUrl: "https://youtu.be/DLX62G4lc44",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture2",
            lectureTitle: "JSX and Component Structure",
            lectureDuration: 25,
            lectureUrl: "https://youtu.be/w7ejDZ8SWv8",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "State Management and Hooks",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "useState and useEffect Deep Dive",
            lectureDuration: 28,
            lectureUrl: "https://youtu.be/0ZJgIjIuY7U",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Context API and Performance Optimization",
            lectureDuration: 30,
            lectureUrl: "https://youtu.be/35lXWvCuM8o",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 4.9,
        _id: "6773e37360cb0ab974342321",
      },
    ],
    createdAt: "2024-08-18T07:45:53.622Z",
    updatedAt: "2025-01-10T06:30:44.701Z",
    __v: 4,
    courseThumbnail: "https://img.youtube.com/vi/DLX62G4lc44/maxresdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a1",
    courseTitle: "Introduction to JavaScript: Master the Javascript ",
    courseSubTitle:
      " skljfa kjajfl kajsfd jkasj klsajfkljs dklfjlksd ncvmnczv vcm cvnmvc  m, vc v  m, v",
    courseDescription:
      "Learn the Basics of JavaScript JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
    coursePrice: 499.99,
    isPublished: true,
    discount: 20,
    language: "English",
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
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setting Up Your Environment",
            lectureDuration: 19,
            lectureUrl: "https://youtu.be/4l87c2aeB4I",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
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
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Data Types in JavaScript",
            lectureDuration: 10,
            lectureUrl: "https://youtu.be/ufHT2WEkkC4",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
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
        rating: 4.5,
        _id: "6773e37360cb0ab974342314",
      },
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T04:47:44.701Z",
    __v: 4,
    courseThumbnail: "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a2",
    courseTitle:
      "React Fundamentals: Build Modern Web Applications with Hooks and Components",
    courseSubTitle:
      "Learn React from scratch and build scalable, reusable, and performant frontend applications.",
    courseDescription:
      "This course introduces you to React, one of the most popular JavaScript libraries for building user interfaces.</p><p>You will learn how components work, manage state using hooks, and build real-world applications.</p><ul><li>Understand React fundamentals</li><li>Work with hooks and state</li><li>Build reusable components</li><li>Deploy React apps</li></ul>",
    coursePrice: 799.99,
    isPublished: true,
    discount: 30,
    language: "English",
    learnings: [
      "Understand React basics",
      "Work with JSX and components",
      "Use React hooks effectively",
      "Build SPA applications",
      "Manage component state",
      "Deploy React projects",
    ],
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Introduction to React",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is React?",
            lectureDuration: 15,
            lectureUrl: "https://youtu.be/DLX62G4lc44",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setting Up React Environment",
            lectureDuration: 18,
            lectureUrl: "https://youtu.be/w7ejDZ8SWv8",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 4.7,
        _id: "6773e37360cb0ab974342315",
      },
    ],
    createdAt: "2024-11-10T10:12:33.622Z",
    updatedAt: "2025-01-05T06:25:44.701Z",
    __v: 2,
    courseThumbnail: "https://img.youtube.com/vi/DLX62G4lc44/maxresdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a3",
    courseTitle: "Node.js & Express: Backend Development from Scratch",
    courseSubTitle:
      "Master backend development by building APIs, authentication systems, and scalable servers.",
    courseDescription:
      "This course teaches you backend development using Node.js and Express.</p><p>You will learn how to create REST APIs, work with databases, and implement authentication.</p><ul><li>Create RESTful APIs</li><li>Work with MongoDB</li><li>Implement JWT authentication</li><li>Deploy backend services</li></ul>",
    coursePrice: 999.99,
    isPublished: true,
    discount: 25,
    language: "English",
    learnings: [
      "Build REST APIs",
      "Understand Express framework",
      "Work with MongoDB",
      "Implement authentication",
      "Handle backend security",
      "Deploy Node applications",
    ],
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Getting Started with Node.js",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Introduction to Node.js",
            lectureDuration: 14,
            lectureUrl: "https://youtu.be/TlB_eWDSMt4",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Understanding Event Loop",
            lectureDuration: 22,
            lectureUrl: "https://youtu.be/PNa9OMajw9w",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V"],
    courseRatings: [
      {
        userId: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        rating: 4.6,
        _id: "6773e37360cb0ab974342316",
      },
    ],
    createdAt: "2024-10-01T09:45:13.622Z",
    updatedAt: "2025-01-03T05:15:44.701Z",
    __v: 1,
    courseThumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/maxresdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a4",
    courseTitle: "Advanced JavaScript: Deep Dive into Concepts and Performance",
    courseSubTitle:
      "Strengthen your JavaScript skills by mastering advanced concepts and best practices.",
    courseDescription:
      "This course focuses on advanced JavaScript concepts such as closures, prototypes, async programming, and performance optimization. It is designed for developers who already know the basics and want to write cleaner, faster, and more scalable JavaScript applications.",
    coursePrice: 899.99,
    isPublished: true,
    discount: 20,
    language: "English",
    learnings: [
      "Understand closures and scope",
      "Master asynchronous JavaScript",
      "Work with promises and async/await",
      "Improve JavaScript performance",
      "Write clean and maintainable code",
      "Handle complex logic efficiently",
    ],
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Advanced JavaScript Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Closures Explained",
            lectureDuration: 18,
            lectureUrl: "https://youtu.be/1JsJx1x35c0",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Prototypes and Inheritance",
            lectureDuration: 21,
            lectureUrl: "https://youtu.be/GhbhD1HR5vk",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 4.8,
        _id: "6773e37360cb0ab974342317",
      },
    ],
    createdAt: "2024-11-20T07:30:53.622Z",
    updatedAt: "2025-01-06T04:47:44.701Z",
    __v: 2,
    courseThumbnail: "https://img.youtube.com/vi/1JsJx1x35c0/maxresdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a5",
    courseTitle: "Full Stack Web Development with MERN",
    courseSubTitle:
      "Build complete web applications using MongoDB, Express, React, and Node.js.",
    courseDescription:
      "This course teaches full stack web development using the MERN stack. You will learn how frontend and backend work together, build REST APIs, manage databases, implement authentication, and deploy full stack applications.",
    coursePrice: 1199.99,
    isPublished: true,
    discount: 35,
    language: "English",
    learnings: [
      "Build full stack applications",
      "Develop REST APIs",
      "Connect frontend with backend",
      "Implement authentication and authorization",
      "Work with MongoDB and Express",
      "Deploy full stack projects",
    ],
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Introduction to Full Stack Development",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is MERN Stack?",
            lectureDuration: 17,
            lectureUrl: "https://youtu.be/7CqJlxBYj-M",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Project Architecture Overview",
            lectureDuration: 20,
            lectureUrl: "https://youtu.be/Oe421EPjeBE",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        rating: 4.9,
        _id: "6773e37360cb0ab974342318",
      },
    ],
    createdAt: "2024-12-05T10:16:53.622Z",
    updatedAt: "2025-01-07T05:55:44.701Z",
    __v: 3,
    courseThumbnail: "https://img.youtube.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a6",
    courseTitle: "Data Structures and Algorithms for Coding Interviews",
    courseSubTitle:
      "Learn DSA step by step and prepare effectively for technical interviews.",
    courseDescription:
      "This course focuses on building strong foundations in data structures and algorithms. You will learn how to solve common interview problems using arrays, strings, linked lists, stacks, queues, trees, and graphs. The course also emphasizes problem-solving techniques and time–space complexity analysis.",
    coursePrice: 1099.99,
    isPublished: true,
    discount: 40,
    language: "English",
    learnings: [
      "Understand core data structures",
      "Solve algorithmic problems efficiently",
      "Analyze time and space complexity",
      "Prepare for coding interviews",
      "Improve logical thinking",
      "Write optimized solutions",
    ],
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Introduction to DSA",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Why Learn Data Structures?",
            lectureDuration: 14,
            lectureUrl: "https://youtu.be/BBpAmxU_NQo",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Time and Space Complexity",
            lectureDuration: 22,
            lectureUrl: "https://youtu.be/mV3wrLBbuuE",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 4.8,
        _id: "6773e37360cb0ab974342319",
      },
    ],
    createdAt: "2024-10-15T06:40:53.622Z",
    updatedAt: "2025-01-08T04:47:44.701Z",
    __v: 2,
    courseThumbnail: "https://img.youtube.com/vi/BBpAmxU_NQo/maxresdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a7",
    courseTitle: "System Design Basics for Software Engineers",
    courseSubTitle:
      "Understand how to design scalable, reliable, and efficient systems.",
    courseDescription:
      "This course introduces the fundamentals of system design. You will learn how large-scale applications are designed, how to handle scalability, load balancing, caching, databases, and basic distributed system concepts. It is ideal for students preparing for interviews or real-world development.",
    coursePrice: 1299.99,
    isPublished: true,
    discount: 30,
    language: "English",
    learnings: [
      "Understand system design fundamentals",
      "Learn scalability concepts",
      "Design high-level architectures",
      "Work with databases and caching",
      "Understand load balancing",
      "Prepare for system design interviews",
    ],
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Introduction to System Design",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is System Design?",
            lectureDuration: 16,
            lectureUrl: "https://youtu.be/UzLMhqg3_Wc",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Scalability and Load Balancing",
            lectureDuration: 24,
            lectureUrl: "https://youtu.be/9vF1nZ9xY9Q",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V"],
    courseRatings: [
      {
        userId: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        rating: 4.7,
        _id: "6773e37360cb0ab974342320",
      },
    ],
    createdAt: "2024-09-28T09:10:53.622Z",
    updatedAt: "2025-01-09T05:20:44.701Z",
    __v: 1,
    courseThumbnail: "https://img.youtube.com/vi/UzLMhqg3_Wc/maxresdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a9",
    courseTitle: "Backend Engineering with Node.js, Express, and MongoDB",
    courseSubTitle:
      "Learn how to design, build, and scale secure backend systems using Node.js.",
    courseDescription:
      "This course provides a deep understanding of backend development using Node.js and Express. You will learn how to design RESTful APIs, work with databases, handle authentication and authorization, and build scalable backend services. The course also covers error handling, security best practices, and performance considerations. It is ideal for developers who want to strengthen their backend skills and understand how real-world applications work behind the scenes.",
    coursePrice: 1599.99,
    isPublished: true,
    discount: 40,
    language: "English",
    learnings: [
      "Build scalable backend applications",
      "Design RESTful APIs",
      "Work with MongoDB and Mongoose",
      "Implement authentication and authorization",
      "Handle errors and validations",
      "Apply backend security best practices",
      "Optimize backend performance",
    ],
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Backend Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Introduction to Backend Development",
            lectureDuration: 18,
            lectureUrl: "https://youtu.be/TlB_eWDSMt4",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Node.js Architecture and Event Loop",
            lectureDuration: 26,
            lectureUrl: "https://youtu.be/PNa9OMajw9w",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "API Development and Databases",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Building REST APIs with Express",
            lectureDuration: 30,
            lectureUrl: "https://youtu.be/Oe421EPjeBE",
            isPreviewFree: true,
            lectureOrder: 1,
            lectureSubtitles: ["English"],
          },
          {
            lectureId: "lecture4",
            lectureTitle: "MongoDB and Data Modeling",
            lectureDuration: 32,
            lectureUrl: "https://youtu.be/7CqJlxBYj-M",
            isPreviewFree: false,
            lectureOrder: 2,
            lectureSubtitles: ["English"],
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V"],
    courseRatings: [
      {
        userId: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        rating: 4.8,
        _id: "6773e37360cb0ab974342322",
      },
    ],
    createdAt: "2024-07-05T09:20:53.622Z",
    updatedAt: "2025-01-11T04:50:44.701Z",
    __v: 3,
    courseThumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/maxresdefault.jpg",
  },
];
