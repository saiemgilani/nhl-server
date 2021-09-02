'use strict';

var utils = require('../utils/writer.js');
var Conferences = require('../service/ConferencesService');

module.exports.getConference = function getConference (req, res, next, id) {
  Conferences.getConference(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConferences = function getConferences (req, res, next) {
  Conferences.getConferences()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
