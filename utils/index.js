function generateRandomThroughput() {
  return Math.random() * 100;
}

function generateRandomLatency() {
  return Math.round(Math.random() * 10000) / 100;
}

module.exports = {
  generateRandomThroughput,
  generateRandomLatency
};