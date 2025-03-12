const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  permissions: [{ 
    type: String,
    required: true // Ensure permissions are provided
  }]  // Example: ["manage-users", "manage-courses"]
}, { timestamps: true });


module.exports = mongoose.model("Admin", adminSchema);
