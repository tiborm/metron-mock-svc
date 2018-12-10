const kafkaRouter = require("express").Router();

kafkaRouter.get("/topic/:configId", function(req, res, next) {
  res.status(200).send(
    // we simply returning the result set of bro config on full dev
    { name: "bro", numPartitions: 1, replicationFactor: 1, properties: {} }
  );
});

kafkaRouter.get("/topic/:configId/sample", function(req, res, next) {
  res.status(200)
    .send(
      '2018-12-07 16:20:58.000|2018-12-07 16:20:58.000|   0.000|   0.000|  6|                         192.168.138.158|49186|                           62.75.195.236|   80|       A|       0|       0|       0|516c4a0c|00000000|000|000|       1|      40|       0|       0|    0|idle '
    ); // we simply returning the result set of bro config on full dev
});

module.exports = kafkaRouter;
