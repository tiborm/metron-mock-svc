const fs = require('fs');
const parserRouter = require('express').Router();

const parserConfig = JSON.parse(fs.readFileSync('./mock-data/parser-config.json', 'utf-8'));
const parserGroups = JSON.parse(fs.readFileSync('./mock-data/parser-group.json', 'utf-8'));

parserRouter.get('/config', function(req, res, next) {
  res.status(200).send(JSON.stringify(parserConfig));
});
// curl "http://localhost:3000/api/v1/sensor/parser/config/websphere"
parserRouter.get('/config/:sensorName', function(req, res, next) {
  const item = parserConfig[req.params.sensorName];
  item ? res.status(200).send(JSON.stringify(item)) : res.status(404).send();
});
// curl --header "Content-Type: application/json" --request POST --data '{"name":"ANiceGroup","description":"Just a nice group of parsers. Edited version #1"}' http://localhost:3000/api/v1/sensor/parser/config/websphere
parserRouter.post('/config/:sensorName', function(req, res, next) {
  parserConfig[req.params.sensorName] = req.body;
  
  res.status(200).send(
    JSON.stringify(parserConfig[req.params.sensorName])
  );
});
// curl --request DELETE http://localhost:3000/api/v1/sensor/parser/config/websphere
parserRouter.delete('/config/:sensorName', function(req, res, next) {
  if (parserConfig[req.params.sensorName]) {
    delete parserConfig[req.params.sensorName];
    res.status(200).send(
      JSON.stringify({ name: req.params.sensorName, operation: 'delete' })
    );
  } else {
    res.status(404).send(
      JSON.stringify({ name: req.params.sensorName, operation: 'delete' })
    );
  }
});

// curl "http://localhost:3000/api/v1/sensor/parser/group"
parserRouter.get('/group', function(req, res, next) {
  res.status(200).send(JSON.stringify(parserGroups));
});
// curl "http://localhost:3000/api/v1/sensor/parser/group/ANiceGroup"
parserRouter.get('/group/:groupId', function(req, res, next) {
  const item = parserGroups.find(group => group.name === req.params.groupId);
  item ? res.status(200).send(JSON.stringify(item)) : res.status(404).send();
});
// curl --header "Content-Type: application/json" --request POST --data '{"name":"ANiceGroup","description":"Just a nice group of parsers. Edited version #1"}' http://localhost:3000/api/v1/sensor/parser/group/ANiceGroup
parserRouter.post('/group/:groupId', function(req, res, next) {
  const postedItem = req.body;
  const editedItem = parserGroups.find(group => group.name === req.params.groupId);

  if (editedItem) {
    editedItem.name = postedItem.name;
    editedItem.description = postedItem.description;
  } else {
    parserGroups.push(postedItem);
  }
  
  res.status(200).send(
    JSON.stringify(
      parserGroups.find(group => group.name === req.params.groupId)
    )
  );
});
// curl --request DELETE "http://localhost:3000/api/v1/sensor/parser/group/ANiceGroup"
parserRouter.delete('/group/:groupId', function(req, res, next) {
  const item = parserGroups.find(group => group.name === req.params.groupId);

  if (item) {
    parserGroups.splice(parserGroups.indexOf(item), 1);

    res.status(200).send(
      JSON.stringify({ name: req.params.groupId, operation: 'delete' })
    );
  } else {
    res.status(404).send();
  }  
});

module.exports = parserRouter;
