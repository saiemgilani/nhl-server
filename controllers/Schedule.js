'use strict';

var utils = require('../utils/writer.js');
var Schedule = require('../service/ScheduleService');

module.exports.getSchedule = function getSchedule (req, res, next, expand, teamId, startDate, endDate) {
  Schedule.getSchedule(expand, teamId, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
