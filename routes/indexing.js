const indexingRouter = require('express').Router();

indexingRouter.get("/config/:configId", function(req, res) {
  res.send({
    "hdfs": {
      "index": "yaf",
      "batchSize": 5,
      "enabled": true
    },
    "elasticsearch": {
      "index": "yaf",
      "batchSize": 5,
      "enabled": true
    },
    "solr": {
      "index": "yaf",
      "batchSize": 5,
      "enabled": true
    }
  });
});

indexingRouter.post('/config/:configId', function (req, res) {
  res.status(200).send({});
});

module.exports = indexingRouter;