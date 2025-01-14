const exclusions = require('./testCoverageExclusions.json');

module.exports = {
  ...exclusions,
  reporter: [
    "text",
    "lcov"
  ]
};
