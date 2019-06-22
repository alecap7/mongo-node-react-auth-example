module.exports = app => {
  app.get("/version", function(req, res) {
    res.json("current api version 0.1.0");
  });

  require("./auth")(app);
};
