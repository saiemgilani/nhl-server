'use strict';

var utils = require('../utils/writer.js');
var Players = require('../service/PlayersService');

module.exports.getPlayer = function getPlayer (req, res, next, id) {
  Players.getPlayer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPlayerStats = function getPlayerStats (req, res, next, id, stats, season) {
  Players.getPlayerStats(id, stats, season)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
