const mongoose = require("mongoose");

const User = mongoose.model("users");

const authenticate = async function(username, password, done) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return done(null, false, { username: "User doesn't exist." });
    }

    if (!user.validatePassword(password)) {
      return done(null, false, {
        password: "Incorrect password."
      });
    }
    return done(null, user, { message: "Logged In Successfully" });
  } catch (err) {
    return done(err);
  }
};

const authorize = async function(jwtPayload, done) {
  try {
    const user = User.findById(jwtPayload._id);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

module.exports = { authenticate, authorize };
