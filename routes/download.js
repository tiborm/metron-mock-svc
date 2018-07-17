const pcapRouter = require('express').Router();

pcapRouter.get('/:queryId/:page', function (req, res, next) {
  res.sendFile(process.cwd() + '/mock-data/dummy.pcap');
});

module.exports = pcapRouter;
