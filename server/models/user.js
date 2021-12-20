const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  imageUrl: String,
});

// compile model from schema
const User = new mongoose.model("User", UserSchema);

module.exports = User;
