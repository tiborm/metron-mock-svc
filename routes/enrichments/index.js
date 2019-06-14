const router = require('express').Router();
const data = require('../../mock-data/enrichments/entries.json');

router.get('/enrichments/:id', function (req, res) {
  const id = req.params.id;
  const entry = data.find(entry => entry.uuid === id);
  if (entry) {
    res.status(200).send(entry);
  } else {
    res.status(404).send();
  }

});

router.get('/enrichments/:type/entries', function (req, res) {
  const type = req.params.type;
  res.status(200).send(data.filter(entry => entry.type === type));
});

router.put('/enrichments/:type/entries/:id', function (req, res) {
  const id = req.params.id;
  const type = req.params.type;
  const index = data.findIndex(entry => entry.uuid === id && entry.type === type);
  data.splice(index, 1, req.body);
  res.status(200).send(data[index]);
});

module.exports = router;
