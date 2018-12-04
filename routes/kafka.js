const kafkaRouter = require("express").Router();

kafkaRouter.get("/topic/:configId", function(req, res, next) {
  res.status(200).send(
    // we simply returning the result set of bro config on full dev
    { name: "bro", numPartitions: 1, replicationFactor: 1, properties: {} }
  );
});

kafkaRouter.get("/topic/:configId/sample", function(req, res, next) {
  res.status(404)
    .send(); // we simply returning the result set of bro config on full dev
});

module.exports = kafkaRouter;
