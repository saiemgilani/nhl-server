'use strict';

var utils = require('../utils/writer.js');
var Standings = require('../service/StandingsService');

module.exports.getStandingTypes = function getStandingTypes (req, res, next) {
  Standings.getStandingTypes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStandings = function getStandings (req, res, next, season, date) {
  Standings.getStandings(season, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStandingsByType = function getStandingsByType (req, res, next, type) {
  Standings.getStandingsByType(type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
