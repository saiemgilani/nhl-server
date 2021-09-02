'use strict';

var utils = require('../utils/writer.js');
var Draft = require('../service/DraftService');

module.exports.getDraft = function getDraft (req, res, next) {
  Draft.getDraft()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDraftByYear = function getDraftByYear (req, res, next, year) {
  Draft.getDraftByYear(year)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDraftProspect = function getDraftProspect (req, res, next, id) {
  Draft.getDraftProspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDraftProspects = function getDraftProspects (req, res, next) {
  Draft.getDraftProspects()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
