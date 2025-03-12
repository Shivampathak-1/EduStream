const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  createdCourses: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Course" 
  }],
  experience: { 
    type: String,
    required: true, // Ensure experience is provided
    minlength: 10 // Minimum length for experience description
  },
  bio: { 
    type: String,
    required: true, // Ensure bio is provided
    minlength: 10 // Minimum length for bio description
  }
}, { timestamps: true });

module.exports = mongoose.model("Instructor", instructorSchema);
