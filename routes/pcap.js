const fs = require('fs');
const uuid = require('uuid/v1');

const express = require('express');
const pcapRouter = require('express').Router();

const pdml = fs.readFileSync('./mock-data/pdml.json', 'utf-8');


pcapRouter.post('/submit', function(req, res, next) {
  res.status(200).send(
    JSON.stringify({
      id: uuid()
    })
  );
});

pcapRouter.get('/status', function (req, res, next) {
  res.status(200).send(JSON.stringify({
    status: "Finished",
    totalPages: 34
  }));
});


pcapRouter.get('/resultJson', function (req, res, next) {
  res.status(200).send(pdml);
});

pcapRouter.get('/download', function (req, res, next) {
  res.sendFile(process.cwd() + '/mock-data/dummy.pcap');
});

module.exports = pcapRouter;
