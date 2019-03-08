const alertsUiRouter = require('express').Router();

alertsUiRouter.post('/search', function (req, res) {
  res.sendFile(process.cwd() + '/mock-data/alerts/search.json');
});

alertsUiRouter.post('/column/metadata', function (req, res) {
  res.sendFile(process.cwd() + '/mock-data/alerts/column-metadata.json');
});

module.exports = alertsUiRouter;
