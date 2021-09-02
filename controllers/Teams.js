'use strict';

var utils = require('../utils/writer.js');
var Teams = require('../service/TeamsService');

module.exports.getTeam = function getTeam (req, res, next, id, expand, season) {
  Teams.getTeam(id, expand, season)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeamRoster = function getTeamRoster (req, res, next, id, season) {
  Teams.getTeamRoster(id, season)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeamStats = function getTeamStats (req, res, next, id) {
  Teams.getTeamStats(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeams = function getTeams (req, res, next, expand, season) {
  Teams.getTeams(expand, season)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
