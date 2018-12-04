const enrichmentRouter = require("express").Router();

enrichmentRouter.get("/config/:configId", function(req, res, next) {
  res
    .status(200)
    .send({ // this is the response for bro
      enrichment: {
        fieldMap: { geo: ["ip_dst_addr", "ip_src_addr"], host: ["host"] },
        fieldToTypeMap: {},
        config: {}
      },
      threatIntel: {
        fieldMap: { hbaseThreatIntel: ["ip_src_addr", "ip_dst_addr"] },
        fieldToTypeMap: {
          ip_src_addr: ["malicious_ip"],
          ip_dst_addr: ["malicious_ip"]
        },
        config: {},
        triageConfig: {
          riskLevelRules: [],
          aggregator: "MAX",
          aggregationConfig: {}
        }
      },
      configuration: {}
    });
});

module.exports = enrichmentRouter;
