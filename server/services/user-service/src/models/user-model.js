const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true,
      trim: true // Removes extra spaces
    },
    email: { 
      type: String, 
      unique: true, 
      required: true,
      lowercase: true, // Ensures consistent email format
    },
    password: { 
      type: String, 
      required: true,
      minlength: 6 // Ensures strong passwords
    },
    phone: {
      type: String, 
      required: true,
      unique: true, // Ensures unique phone numbers
      match: [/^\d{10}$/, "Invalid phone number"], // Ensures 10-digit format
    },
    dob: {
      type: Date,
      // required: true,
      validate: {
        validator: function (value) {
          return value < new Date(); // Prevents future dates
        },
        message: "Date of birth cannot be in the future"
      }
    },
    profileURL: {
      type: String,
      default: "https://banner2.cleanpng.com/20180622/tqt/aazen4lhc.webp" // More reliable placeholder
    },
    role: { 
      type: String, 
      enum: ["student", "instructor", "admin"], 
      default: "student"
    },
    refreshToken: {
      type: String,
      default: null
    }
  }, 
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
