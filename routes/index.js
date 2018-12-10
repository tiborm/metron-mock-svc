const router = require('express').Router();

// TODO mock login
router.get('/user', function(req, res, next) {
  res.status(200).send("user");
});

const alertsUiRouter = require('./alerts')
router.use('/search', alertsUiRouter);

const globalConfigRouter = require('./global')
router.use('/global', globalConfigRouter);


const pcapRouter = require('./pcap');
const pcapDownload = require('./download');
router.use('/pcap/raw', pcapDownload);
router.use('/pcap', pcapRouter);

const parserRouter = require('./parser');
router.use('/sensor/parser', parserRouter);

const enrichmentRouter = require('./enrichment');
router.use('/sensor/enrichment', enrichmentRouter);

const indexingRouter = require('./indexing');
router.use('/sensor/indexing', indexingRouter);

const kafkaRouter = require('./kafka');
router.use('/kafka', kafkaRouter);

const stormRouter = require('./storm');
router.use('/storm', stormRouter);

const hdfsRouter = require('./hdfs');
router.use('/hdfs', hdfsRouter);

const grokRouter = require('./grok');
router.use('/grok', grokRouter);

const stellarRouter = require('./stellar');
router.use('/stellar', stellarRouter);

module.exports = router;
