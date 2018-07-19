const fs = require('fs');
const uuid = require('uuid/v1');

const pcapRouter = require('express').Router();

const pdml = fs.readFileSync('./mock-data/pdml.json', 'utf-8');


pcapRouter.post('/fixed', function(req, res, next) {
  res.status(200).send(
    JSON.stringify({
      jobId: uuid(),
      jobStatus: "RUNNING",
      description: "map: 0.0%, reduce: 0.0%",
      percentComplete: 0,
      size: 0
    })
  );
});


let statusRequestsCount = 0;

pcapRouter.get('/:jobId', function (req, res, next) {
  if (statusRequestsCount < 3) {
    statusRequestsCount++;
    res.status(200).send(
      JSON.stringify({
        "jobId": req.params.jobId,
        "jobStatus": "RUNNING",
        "description": "map: 20.0%, reduce: 0.0%",
        "percentComplete": 10,
        "size": 0
      })
    );
  } else {
    statusRequestsCount = 0;
    res.status(200).send(
      JSON.stringify({
        "jobId": req.params.jobId,
        "jobStatus": "RUNNING",
        "description": "map: 20.0%, reduce: 0.0%",
        "percentComplete": 10,
        "size": 0
      })
    );
  }
});


pcapRouter.get('/output/:jobId/:pageId', function (req, res, next) {
  res.status(200).send(pdml);
});

pcapRouter.get('/raw/:jobId/:pageId', function (req, res, next) {
  res.sendFile(process.cwd() + '/mock-data/dummy.pcap');
});

module.exports = pcapRouter;
