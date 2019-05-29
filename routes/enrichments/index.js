const router = require('express').Router();
const data = require('../../mock-data/enrichments/entries.json');

router.get('/enrichments/:id/entries', function (req, res) {
  res.status(200).send(data);
});

module.exports = router;
