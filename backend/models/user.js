const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  city: { type: String, default: "" },
});

exports.User = mongoose.model("User",userSchema);