'use strict';


/**
 * Get round-by-round data for current year's NHL Entry Draft.
 *
 * returns Draft
 **/
exports.getDraft = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "drafts" : [ {
    "draftYear" : 2017,
    "rounds" : [ {
      "roundNumber" : 1,
      "round" : 1,
      "picks" : [ {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      }, {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      } ]
    }, {
      "roundNumber" : 1,
      "round" : 1,
      "picks" : [ {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      }, {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      } ]
    } ]
  }, {
    "draftYear" : 2017,
    "rounds" : [ {
      "roundNumber" : 1,
      "round" : 1,
      "picks" : [ {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      }, {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      } ]
    }, {
      "roundNumber" : 1,
      "round" : 1,
      "picks" : [ {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      }, {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      } ]
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get round-by-round data for a specific year's NHL Entry Draft.
 *
 * year BigDecimal The draft year.
 * returns Draft
 **/
exports.getDraftByYear = function(year) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "drafts" : [ {
    "draftYear" : 2017,
    "rounds" : [ {
      "roundNumber" : 1,
      "round" : 1,
      "picks" : [ {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      }, {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      } ]
    }, {
      "roundNumber" : 1,
      "round" : 1,
      "picks" : [ {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      }, {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      } ]
    } ]
  }, {
    "draftYear" : 2017,
    "rounds" : [ {
      "roundNumber" : 1,
      "round" : 1,
      "picks" : [ {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      }, {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      } ]
    }, {
      "roundNumber" : 1,
      "round" : 1,
      "picks" : [ {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      }, {
        "prospect" : {
          "link" : "/api/v1/draft/prospects/65242",
          "fullName" : "Nico Hischier",
          "id" : 65242
        },
        "pickOverall" : 1,
        "round" : "1",
        "year" : 2017,
        "team" : {
          "name" : "New Jersey Devils",
          "link" : "/api/v1/teams/1",
          "id" : 1
        },
        "pickInRound" : 1
      } ]
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an NHL Entry Draft prospect.
 *
 * id BigDecimal The prospect ID.
 * returns DraftProspects
 **/
exports.getDraftProspect = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "prospects" : [ {
    "lastName" : "Hischier",
    "amateurLeague" : {
      "link" : "/api/v1/league/null"
    },
    "link" : "/api/v1/draft/prospects/65242",
    "fullName" : "Nico Hischier",
    "weight" : 179,
    "birthCity" : "Naters",
    "birthDate" : "1999-01-04T00:00:00.000+00:00",
    "amateurTeam" : {
      "link" : "/api/v1/teams/null"
    },
    "primaryPosition" : {
      "code" : "C",
      "name" : "Center",
      "type" : "Forward",
      "abbreviation" : "C"
    },
    "prospectCategory" : {
      "name" : "North American Skater",
      "id" : 1,
      "shortName" : "NA Skater"
    },
    "firstName" : "Nico",
    "ranks" : { },
    "nationality" : "CHE",
    "birthCountry" : "CHE",
    "id" : 65242,
    "height" : "6' 2\"",
    "shootsCatches" : "L"
  }, {
    "lastName" : "Hischier",
    "amateurLeague" : {
      "link" : "/api/v1/league/null"
    },
    "link" : "/api/v1/draft/prospects/65242",
    "fullName" : "Nico Hischier",
    "weight" : 179,
    "birthCity" : "Naters",
    "birthDate" : "1999-01-04T00:00:00.000+00:00",
    "amateurTeam" : {
      "link" : "/api/v1/teams/null"
    },
    "primaryPosition" : {
      "code" : "C",
      "name" : "Center",
      "type" : "Forward",
      "abbreviation" : "C"
    },
    "prospectCategory" : {
      "name" : "North American Skater",
      "id" : 1,
      "shortName" : "NA Skater"
    },
    "firstName" : "Nico",
    "ranks" : { },
    "nationality" : "CHE",
    "birthCountry" : "CHE",
    "id" : 65242,
    "height" : "6' 2\"",
    "shootsCatches" : "L"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all NHL Entry Draft prospects.
 * Be forewarned that this endpoint returns a **lot** of data and there does not appear to be a way to paginate results.
 *
 * returns DraftProspects
 **/
exports.getDraftProspects = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "prospects" : [ {
    "lastName" : "Hischier",
    "amateurLeague" : {
      "link" : "/api/v1/league/null"
    },
    "link" : "/api/v1/draft/prospects/65242",
    "fullName" : "Nico Hischier",
    "weight" : 179,
    "birthCity" : "Naters",
    "birthDate" : "1999-01-04T00:00:00.000+00:00",
    "amateurTeam" : {
      "link" : "/api/v1/teams/null"
    },
    "primaryPosition" : {
      "code" : "C",
      "name" : "Center",
      "type" : "Forward",
      "abbreviation" : "C"
    },
    "prospectCategory" : {
      "name" : "North American Skater",
      "id" : 1,
      "shortName" : "NA Skater"
    },
    "firstName" : "Nico",
    "ranks" : { },
    "nationality" : "CHE",
    "birthCountry" : "CHE",
    "id" : 65242,
    "height" : "6' 2\"",
    "shootsCatches" : "L"
  }, {
    "lastName" : "Hischier",
    "amateurLeague" : {
      "link" : "/api/v1/league/null"
    },
    "link" : "/api/v1/draft/prospects/65242",
    "fullName" : "Nico Hischier",
    "weight" : 179,
    "birthCity" : "Naters",
    "birthDate" : "1999-01-04T00:00:00.000+00:00",
    "amateurTeam" : {
      "link" : "/api/v1/teams/null"
    },
    "primaryPosition" : {
      "code" : "C",
      "name" : "Center",
      "type" : "Forward",
      "abbreviation" : "C"
    },
    "prospectCategory" : {
      "name" : "North American Skater",
      "id" : 1,
      "shortName" : "NA Skater"
    },
    "firstName" : "Nico",
    "ranks" : { },
    "nationality" : "CHE",
    "birthCountry" : "CHE",
    "id" : 65242,
    "height" : "6' 2\"",
    "shootsCatches" : "L"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

