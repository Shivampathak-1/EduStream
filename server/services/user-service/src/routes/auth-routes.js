const express = require("express");
const { register, login, logout, profile, updateProfile, isLoggedIn } = require("../controllers/auth-controller");
const { addInstructor } = require("../controllers/admin-controller");
const isAdmin = require("../middlewares/adminMiddleware");

const router = express.Router();

// Register user
router.post("/register", register);

// Login user
router.post("/login", login);

// Logout user
router.post("/logout", logout);

// Get user profile (protected route)
router.get("/profile", isLoggedIn, profile);

// Update user profile (protected route)
router.put("/profile/update", isLoggedIn, updateProfile);

// Admin route to add instructor
router.post("/add-instructor", isLoggedIn, isAdmin, addInstructor);

module.exports = router;
