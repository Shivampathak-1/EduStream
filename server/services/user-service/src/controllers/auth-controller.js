const { check, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const Student = require("../models/student");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
const register = [
  // Validation rules
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  check('phone').notEmpty().withMessage('Phone number is required'),
  check('dob').isDate().withMessage('Date of birth is required'),
  check('role').isIn(['student', 'instructor', 'admin']).withMessage('Role must be one of: student, instructor, admin'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, phone, dob, role } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      user = new User({
        name,
        email,
        password: hashedPassword,
        phone,
        dob,
        role,
      });
      await user.save();

      // Create additional user data based on role
      if (role === "student") {
        const student = new Student({ userId: user._id });
        await student.save();
      }

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(`Error during registration: ${error.message}`); // Log error
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }
];

// Login user
const login = [
  // Validation rules
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').notEmpty().withMessage('Password is required'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const accessToken = jwt.sign(
        { userId: user._id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.cookie("token", accessToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      res.status(200).json({ message: "Login successful", accessToken });
    } catch (error) {
      console.error(`Error during login: ${error.message}`); // Log error
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }
];

// Logout user
const logout = async (req, res) => {
  try {
    const userId = req.user.userId;
    await User.findByIdAndUpdate(userId, { refreshToken: null });
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(`Error during logout: ${error.message}`); // Log error
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

// Refresh token
const refreshToken = async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.sendStatus(401);
  }

  const user = await User.findOne({ refreshToken: token });
  if (!user) {
    return res.sendStatus(403);
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    const newAccessToken = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.json({ accessToken: newAccessToken });
  });
};

// Profile route - Get current logged-in user's profile
const profile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(`Error fetching profile: ${error.message}`); // Log error
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

// Update profile route
const updateProfile = async (req, res) => {
  const { name, email, phone, dob } = req.body;
  try {
    const userId = req.user.userId;
    const user = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        phone,
        dob,
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error(`Error updating profile: ${error.message}`); // Log error
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

// Protect routes (middleware to check if logged in)
const isLoggedIn = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "You must be logged in" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = {
  register,
  login,
  logout,
  profile,
  updateProfile,
  isLoggedIn,
  refreshToken,
};
