const parserRouter = require('express').Router();

const {
  parserConfigs,
  parserGroups,
} = require('../mock-data');

parserRouter.get('/config', function(req, res) {
  res.status(200).send(parserConfigs);
});
// curl "http://localhost:3000/api/v1/sensor/parser/config/websphere"
parserRouter.get('/config/:sensorName', function(req, res) {
  const item = parserConfigs[req.params.sensorName];
  res.status(200).send(item);
});

// curl --header "Content-Type: application/json" --request POST --data '{"name":"ANiceGroup","description":"Just a nice group of parsers. Edited version #1"}' http://localhost:3000/api/v1/sensor/parser/config/websphere
parserRouter.post('/config/:sensorName', function(req, res) {
  parserConfigs[req.params.sensorName] = req.body;
  res.status(200).send(parserConfigs[req.params.sensorName]);
});
// curl --request DELETE http://localhost:3000/api/v1/sensor/parser/config/websphere
parserRouter.delete('/config/:sensorName', function(req, res) {
  if (parserConfigs[req.params.sensorName]) {
    delete parserConfigs[req.params.sensorName];
    res.status(200).send(
      { name: req.params.sensorName, operation: 'delete' }
    );
  } else {
    res.status(404).send(
      { name: req.params.sensorName, operation: 'delete' }
    );
  }
});

parserRouter.get('/config/list/available', function (req, res) {
  res.status(200).send({
    "Grok": "org.apache.metron.parsers.GrokParser",
    "CEF": "org.apache.metron.parsers.cef.CEFParser",
    "Lancope": "org.apache.metron.parsers.lancope.BasicLancopeParser",
    "Syslog5424": "org.apache.metron.parsers.syslog.Syslog5424Parser",
    "CSV": "org.apache.metron.parsers.csv.CSVParser",
    "PaloAltoFirewall": "org.apache.metron.parsers.paloalto.BasicPaloAltoFirewallParser",
    "Logstash": "org.apache.metron.parsers.logstash.BasicLogstashParser",
    "Sourcefire": "org.apache.metron.parsers.sourcefire.BasicSourcefireParser",
    "FireEye": "org.apache.metron.parsers.fireeye.BasicFireEyeParser",
    "Asa": "org.apache.metron.parsers.asa.BasicAsaParser",
    "Snort": "org.apache.metron.parsers.snort.BasicSnortParser",
    "JSONMap": "org.apache.metron.parsers.json.JSONMapParser",
    "Ise": "org.apache.metron.parsers.ise.BasicIseParser",
    "GrokWebSphere": "org.apache.metron.parsers.websphere.GrokWebSphereParser",
    "Bro": "org.apache.metron.parsers.bro.BasicBroParser"
  });
});

// curl "http://localhost:3000/api/v1/sensor/parser/group"
parserRouter.get('/group', function(req, res) {
  res.status(200).send(parserGroups);
});
// curl "http://localhost:3000/api/v1/sensor/parser/group/ANiceGroup"
parserRouter.get('/group/:groupId', function(req, res) {
  const item = parserGroups.find(group => group.name === req.params.groupId);
  item ? res.status(200).send(item) : res.status(404).send();
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
    parserGroups.find(group => group.name === req.params.groupId)
  );
});
// curl --request DELETE "http://localhost:3000/api/v1/sensor/parser/group/ANiceGroup"
parserRouter.delete('/group/:groupId', function(req, res, next) {
  const item = parserGroups.find(group => group.name === req.params.groupId);

  if (item) {
    parserGroups.splice(parserGroups.indexOf(item), 1);

    res.status(200).send(
      { name: req.params.groupId, operation: 'delete' }
    );
  } else {
    res.status(404).send();
  }
});

module.exports = parserRouter;
