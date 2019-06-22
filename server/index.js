const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./configs/keys");
require("./models/User");

global.__basedir = __dirname;

mongoose.Promise = global.Promise;

mongoose.set("useCreateIndex", true);

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true
};

const connectWithRetry = async () => {
  try {
    await mongoose.connect(
      keys.mongoURI,
      options
    );
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());

require("./middlewares/passport");

require("./routes")(app);

const User = mongoose.model("users");

// const initUsers = async () => {
//   let findUsers = await User.find({});
//   if (!findUsers.length) {
//     console.log("Default user creation..");
//     let admin = new User({ username: "admin", role: "admin" });
//     admin.setPassword("admin");
//     await admin.save();
//   }
// };
//
// initUsers();

const PORT = process.env.PORT || 5000;

app.listen(PORT);
