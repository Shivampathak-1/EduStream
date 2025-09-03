// const { check, validationResult } = require('express-validator');
// const Instructor = require('../models/instructor');
// const Admin = require('../models/admin'); // Assuming an Admin model exists

// // Add a new admin
// const addAdmin = [
//   // Validation rules
//   check('name').notEmpty().withMessage('Name is required'),
//   check('email').isEmail().withMessage('Valid email is required'),

//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email } = req.body;

//     try {
//       const admin = new Admin({ name, email });
//       await admin.save();
//       res.status(201).json({ message: 'Admin added successfully', admin });
//     } catch (error) {
//       console.error(`Error adding admin: ${error.message}`);
//       res.status(500).json({ message: `Error: ${error.message}` });
//     }
//   }
// ];

// // Get all admins
// const getAdmins = async (req, res) => {
//   try {
//     const admins = await Admin.find();
//     res.status(200).json(admins);
//   } catch (error) {
//     console.error(`Error fetching admins: ${error.message}`);
//     res.status(500).json({ message: `Error: ${error.message}` });
//   }
// };

// // Add a new instructor
// const addInstructor = [
//   // Validation rules
//   check('name').notEmpty().withMessage('Name is required'),
//   check('email').isEmail().withMessage('Valid email is required'),
//   check('phone').notEmpty().withMessage('Phone number is required'),
//   check('bio').isLength({ min: 10 }).withMessage('Bio must be at least 10 characters long'),
//   check('experience').isLength({ min: 10 }).withMessage('Experience must be at least 10 characters long'),

//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     // Check if user is authorized
//     if (!req.user || !req.user.userId) {
//       return res.status(401).json({ message: "Unauthorized: Missing user ID" });
//     }

//     const { name, email, phone, bio, experience } = req.body;
//     const userId = req.user.userId;

//     try {
//       const instructor = new Instructor({
//         userId,  // The admin's user ID to link them as the creator of this instructor
//         name,
//         email,
//         phone,
//         bio,
//         experience,
//       });
//       await instructor.save();
//       res.status(201).json({ message: 'Instructor added successfully', instructor });
//     } catch (error) {
//       console.error(`Error adding instructor: ${error.message}`); // Log error
//       res.status(500).json({ message: `Error: ${error.message}` });
//     }
//   }
// ];

// module.exports = { addAdmin, getAdmins, addInstructor };
