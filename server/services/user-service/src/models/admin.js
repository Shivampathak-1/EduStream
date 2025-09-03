const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true,
      unique: true, // Ensures a user can be an admin only once
      index: true   // Improves query performance
    },
    permissions: [{ 
      type: String,
      required: true,
      enum: ["manage-users", "manage-courses", "manage-reports", "manage-settings"], // Restricts values
      default: ["manage-users"] // Optional default permissions
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
