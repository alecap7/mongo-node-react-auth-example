const mongoose = require("mongoose");
const { Schema } = mongoose;
const crypto = require("crypto");

const User = new Schema({
  username: { type: String, required: true },
  salt: { type: String, required: true },
  hash: { type: String, required: true },
  role: { type: String, required: true }
});

User.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

User.methods.validatePassword = function(password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");

  return this.hash === hash;
};

mongoose.model("users", User);
