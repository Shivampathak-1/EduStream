const mongoose = require("mongoose"); 

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    enrolledCourses: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Course",
      default: []
    }],
    progress: [
      {
        course: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: "Course" 
        },
        percentage: { 
          type: Number, 
          default: 0,
          min: 0, 
          max: 100 
        },
      },
    ],
    cart: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    }],
    wishlist: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
