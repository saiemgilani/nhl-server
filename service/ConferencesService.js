'use strict';


/**
 * Get an NHL conference.
 * You can use this to also retrieve inactive conferences. For example, the ID for the World Cup of Hockey is `7`.
 *
 * id BigDecimal The ID of the conference.
 * returns Division
 **/
exports.getConference = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "conference" : {
    "name" : "Western",
    "link" : "/api/v1/conferences/5",
    "id" : 5
  },
  "name" : "Pacific",
  "link" : "/api/v1/divisions/15",
  "active" : true,
  "id" : 15,
  "abbreviation" : "P"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all current NHL conferences.
 * This only retrieves active conferences. For inactive conferences, use `/conferences/{id}`.
 *
 * returns Conferences
 **/
exports.getConferences = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "teams" : [ {
    "name" : "Eastern",
    "link" : "/api/v1/conferences/5",
    "active" : true,
    "id" : 5,
    "abbreviation" : "E",
    "shortName" : "East"
  }, {
    "name" : "Eastern",
    "link" : "/api/v1/conferences/5",
    "active" : true,
    "id" : 5,
    "abbreviation" : "E",
    "shortName" : "East"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

