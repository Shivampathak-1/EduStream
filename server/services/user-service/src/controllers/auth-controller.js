const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const Student = require("../models/student");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

// 🔹 Validation for Registering a User
const registerValidation = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Valid email is required"),
  check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  check("phone").notEmpty().withMessage("Phone number is required"),
  check("dob").matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("Date of birth must be in YYYY-MM-DD format"),
  check("role").isIn(["student", "instructor", "admin"]).withMessage("Role must be one of: student, instructor, admin"),
];

// 🔹 Register User
const registerHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, phone, dob, role } = req.body;

  try {
    let user = await User.findOne({ $or: [{ email }, { phone }] });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword, phone, dob, role });

    await user.save();

    if (role === "student") {
      await Student.createCollection();
      const student = new Student({ userId: user._id });
      await student.save();
    }

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

const register = [...registerValidation, registerHandler];

// 🔹 Login User
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const accessToken = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1hr" });
    const refreshToken = jwt.sign({ userId: user._id }, REFRESH_SECRET, { expiresIn: "7d" });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("accessToken", accessToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "Strict" });
    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "Strict" });

    res.status(200).json({ message: "Login successful", accessToken });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

// 🔹 Logout User
const logout = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { refreshToken: req.cookies.refreshToken },
      { refreshToken: null }
    );

    if (!user) return res.status(400).json({ message: "User not found" });

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

// 🔹 Refresh Token Endpoint
const refreshToken = async (req, res) => {
  const token = req.cookies.refreshToken || req.body.refreshToken;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const user = await User.findOne({ refreshToken: token });
    if (!user) return res.status(403).json({ message: "Invalid refresh token" });

    jwt.verify(token, REFRESH_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ message: "Invalid refresh token" });

      const newAccessToken = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1hr" });

      res.cookie("accessToken", newAccessToken, { httpOnly: true });

      res.status(200).json({ accessToken: newAccessToken });
    });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

// 🔹 Get User Profile
const profile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

// 🔹 Update User Profile
const updateProfile = async (req, res) => {
  try {
    const { name, email, phone, dob } = req.body;
    const user = await User.findByIdAndUpdate(req.user.userId, { name, email, phone, dob }, { new: true });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

// 🔹 Expose All Routes
module.exports = { register, login, logout, refreshToken, profile, updateProfile };
