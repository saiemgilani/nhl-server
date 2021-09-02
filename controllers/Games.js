'use strict';

var utils = require('../utils/writer.js');
var Games = require('../service/GamesService');

module.exports.getGame = function getGame (req, res, next, id) {
  Games.getGame(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGameBoxscore = function getGameBoxscore (req, res, next, id) {
  Games.getGameBoxscore(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGameContent = function getGameContent (req, res, next, id) {
  Games.getGameContent(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGameDiff = function getGameDiff (req, res, next, id, startTimeCode) {
  Games.getGameDiff(id, startTimeCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
