const { authenticate } = require("../controllers/auth");

module.exports = app => {
  app.post("/auth", authenticate);
};
