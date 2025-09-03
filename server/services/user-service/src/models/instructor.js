const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true,
      unique: true, // Prevents duplicate instructor records
      index: true   // Improves query performance
    },
    createdCourses: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Course",
      default: [] // Ensures a default empty array
    }],
    experience: { 
      type: String,
      required: true,
      minlength: 10, // Minimum length for experience description
      maxlength: 500 // Prevents overly long experience descriptions
    },
    bio: { 
      type: String,
      required: true,
      minlength: 10, // Minimum length for bio description
      maxlength: 500 // Prevents overly long bios
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Instructor", instructorSchema);
