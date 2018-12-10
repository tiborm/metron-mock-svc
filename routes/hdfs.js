const hdfsRouter = require('express').Router();

hdfsRouter.get("/", function(req, res) {
  res.send(404);
});

module.exports = hdfsRouter;