'use strict';

var utils = require('../utils/writer.js');
var Divisions = require('../service/DivisionsService');

module.exports.getDivision = function getDivision (req, res, next, id) {
  Divisions.getDivision(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDivisions = function getDivisions (req, res, next) {
  Divisions.getDivisions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
