'use strict';


/**
 * Get an NHL division.
 * You can use this to also retrieve inactive divisions. For example, the ID for the old Patrick division is `13`.
 *
 * id BigDecimal The ID of the division.
 * returns Division
 **/
exports.getDivision = function(id) {
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
 * Get all current NHL divisions.
 * This only retrieves active divisions. For inactive divisions, use `/divisions/{id}`.
 *
 * returns Divisions
 **/
exports.getDivisions = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "teams" : [ {
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
  }, {
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
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

