'use strict';

var utils = require('../utils/writer.js');
var Stats = require('../service/StatsService');

module.exports.getStatTypes = function getStatTypes (req, res, next) {
  Stats.getStatTypes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
