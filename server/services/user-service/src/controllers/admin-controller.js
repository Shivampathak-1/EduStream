const { check, validationResult } = require('express-validator');
const Instructor = require('../models/instructor');

// Add a new instructor
const addInstructor = [
  // Validation rules
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('phone').notEmpty().withMessage('Phone number is required'),
  check('bio').isLength({ min: 10 }).withMessage('Bio must be at least 10 characters long'),
  check('experience').isLength({ min: 10 }).withMessage('Experience must be at least 10 characters long'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, bio, experience } = req.body;
    const userId = req.user.userId; // Get the admin's user ID

    try {
      const instructor = new Instructor({
        userId,  // The admin's user ID to link them as the creator of this instructor
        name,
        email,
        phone,
        bio,
        experience,
      });
      await instructor.save();
      res.status(201).json({ message: 'Instructor added successfully', instructor });
    } catch (error) {
      console.error(`Error adding instructor: ${error.message}`); // Log error
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }
];

module.exports = { addInstructor };
