const fs = require('fs');
const router = require('express').Router();

const pcapRouter = require('./pcap');
const pcapDownload = require('./download');

// TODO mock login
router.get('/user', function(req, res, next) {
  res.status(200).send("user");
});

router.use('/pcap/pcapqueryfilterasync', pcapRouter);
router.use('/pcap/raw', pcapDownload);

module.exports = router;
