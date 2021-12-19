const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  reviewerName: {
    type: String,
    required: true,
  },
  reviewerDesignation: {
    type: String,
    required: true,
  },
  linkedinUrl: {
    type: String,
    required: true,
  },
  content: {
    type: [String],
    required: true,
  },
  reviewerImageUrl: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
