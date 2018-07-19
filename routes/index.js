const fs = require('fs');
const router = require('express').Router();

const pcapRouter = require('./pcap');
const pcapDownload = require('./download');

// TODO mock login
router.get('/user', function(req, res, next) {
  res.status(200).send("user");
});

router.use('/pcap/raw', pcapDownload);
router.use('/pcap', pcapRouter);

module.exports = router;
