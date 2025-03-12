const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      unique: true, 
      required: true 
    },
    password: { 
      type: String, 
      required: true,
      minlength: 6 // Implementing password validation
    },
    phone: {
      type: String, // Changed from Number to String
      required: true
    },
    dob: {
      type: Date,
      required: true
    },
    profileURL: {
      type: String,
      default: "https://banner2.cleanpng.com/20180622/tqt/aazen4lhc.webp"
    },
    role: { 
      type: String, 
      enum: ["student", "instructor", "admin"], 
      default: "student"
    },
    refreshToken: {
      type: String,
      default: null, // Changed default value to null
    }
  }, 
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
