const fs = require('fs');
const router = require('express').Router();

const pcapRouter = require('./pcap');

// TODO mock login
router.get('/user', function(req, res, next) {
  res.status(200).send("user");
});

router.use('/pcap/pcapqueryfilterasync', pcapRouter);

module.exports = router;
