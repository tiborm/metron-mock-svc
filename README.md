# PCAP mock svc

## Setup and run
1. git clone ...
2. npm install
3. npm start (or DEBUG=* npm start if you like to get log messages)
4. Paste the following setup to proxy.conf.js in your metron-alerts folder: 

{
  "/api/v1/pcap": {
    "target": "http://localhost:3000",
    "secure": false
  },
  "/api/v1": {
    "target": "http://localhost:3000",
    "secure": false
  },
  "/logout": {
    "target": "http://node1:8082",
    "secure": false
  }
}

5. Restart your metron-alert UI with ./scripts/start-dev.sh