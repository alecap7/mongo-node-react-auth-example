const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../configs/keys");

const authenticate = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      res.statusMessage = JSON.stringify(info);
      return res.status(500).end();
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.statusMessage = JSON.stringify(err);
        return res.status(500).end();
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const { _id } = user.toJSON();
      const token = jwt.sign({ userId: _id }, keys.jwtSecret);
      return res.json({ token });
    });
  })(req, res);
};

module.exports = { authenticate };
