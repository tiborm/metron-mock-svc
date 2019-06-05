const router = require('express').Router();
const data = require('../../mock-data/enrichments/entries.json');

router.get('/enrichments/:id/entries', function (req, res) {
  const type = req.params.id;
  res.status(200).send(data.filter(entry => entry.type === type));
});

module.exports = router;
