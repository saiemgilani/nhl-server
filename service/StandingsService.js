'use strict';


/**
 * Get all available NHL standing types.
 *
 * returns StandingTypes
 **/
exports.getStandingTypes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "regularSeason",
  "description" : "Regular Season Standings"
}, {
  "name" : "regularSeason",
  "description" : "Regular Season Standings"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get NHL division standings.
 *
 * season date Standings for a specified season. (optional)
 * date date Standings on a specified date. (optional)
 * returns Standings
 **/
exports.getStandings = function(season,date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "records" : [ {
    "division" : {
      "name" : "Pacific",
      "link" : "/api/v1/divisions/15",
      "id" : 15
    },
    "conference" : {
      "name" : "Western",
      "link" : "/api/v1/conferences/5",
      "id" : 5
    },
    "standingsType" : "regularSeason",
    "league" : {
      "name" : "National Hockey League",
      "link" : "/api/v1/league/133",
      "id" : 133
    },
    "teamRecords" : [ {
      "divisionRank" : "2",
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      },
      "streak" : {
        "streakType" : "wins",
        "streakNumber" : 1,
        "streakCode" : "W1"
      },
      "goalsScored" : 162,
      "conferenceRank" : "7",
      "points" : 66,
      "lastUpdated" : "2018-02-11T00:57:18Z",
      "leagueRecord" : {
        "wins" : 29,
        "ot" : 8,
        "losses" : 18,
        "type" : "league"
      },
      "wildCardRank" : "0",
      "gamesPlayed" : 55,
      "leagueRank" : "11",
      "row" : 26,
      "goalsAgainst" : 154
    }, {
      "divisionRank" : "2",
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      },
      "streak" : {
        "streakType" : "wins",
        "streakNumber" : 1,
        "streakCode" : "W1"
      },
      "goalsScored" : 162,
      "conferenceRank" : "7",
      "points" : 66,
      "lastUpdated" : "2018-02-11T00:57:18Z",
      "leagueRecord" : {
        "wins" : 29,
        "ot" : 8,
        "losses" : 18,
        "type" : "league"
      },
      "wildCardRank" : "0",
      "gamesPlayed" : 55,
      "leagueRank" : "11",
      "row" : 26,
      "goalsAgainst" : 154
    } ]
  }, {
    "division" : {
      "name" : "Pacific",
      "link" : "/api/v1/divisions/15",
      "id" : 15
    },
    "conference" : {
      "name" : "Western",
      "link" : "/api/v1/conferences/5",
      "id" : 5
    },
    "standingsType" : "regularSeason",
    "league" : {
      "name" : "National Hockey League",
      "link" : "/api/v1/league/133",
      "id" : 133
    },
    "teamRecords" : [ {
      "divisionRank" : "2",
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      },
      "streak" : {
        "streakType" : "wins",
        "streakNumber" : 1,
        "streakCode" : "W1"
      },
      "goalsScored" : 162,
      "conferenceRank" : "7",
      "points" : 66,
      "lastUpdated" : "2018-02-11T00:57:18Z",
      "leagueRecord" : {
        "wins" : 29,
        "ot" : 8,
        "losses" : 18,
        "type" : "league"
      },
      "wildCardRank" : "0",
      "gamesPlayed" : 55,
      "leagueRank" : "11",
      "row" : 26,
      "goalsAgainst" : 154
    }, {
      "divisionRank" : "2",
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      },
      "streak" : {
        "streakType" : "wins",
        "streakNumber" : 1,
        "streakCode" : "W1"
      },
      "goalsScored" : 162,
      "conferenceRank" : "7",
      "points" : 66,
      "lastUpdated" : "2018-02-11T00:57:18Z",
      "leagueRecord" : {
        "wins" : 29,
        "ot" : 8,
        "losses" : 18,
        "type" : "league"
      },
      "wildCardRank" : "0",
      "gamesPlayed" : 55,
      "leagueRank" : "11",
      "row" : 26,
      "goalsAgainst" : 154
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
 * Get NHL standings for a specific standing type.
 *
 * type String Standing types:   * `byConference` - Standings by Conference   * `byDivision` - Standings by Division   * `byLeague` - Standings by League   * `divisionLeaders` - Division Leader standings   * `postseason` - Postseason Standings   * `preseason` - Preseason Standings   * `regularSeason` - Regular Season Standings   * `wildCard` - Wild card standings   * `wildCardWithLeaders` - Wild card standings with Division Leaders 
 * returns Standings
 **/
exports.getStandingsByType = function(type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "records" : [ {
    "division" : {
      "name" : "Pacific",
      "link" : "/api/v1/divisions/15",
      "id" : 15
    },
    "conference" : {
      "name" : "Western",
      "link" : "/api/v1/conferences/5",
      "id" : 5
    },
    "standingsType" : "regularSeason",
    "league" : {
      "name" : "National Hockey League",
      "link" : "/api/v1/league/133",
      "id" : 133
    },
    "teamRecords" : [ {
      "divisionRank" : "2",
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      },
      "streak" : {
        "streakType" : "wins",
        "streakNumber" : 1,
        "streakCode" : "W1"
      },
      "goalsScored" : 162,
      "conferenceRank" : "7",
      "points" : 66,
      "lastUpdated" : "2018-02-11T00:57:18Z",
      "leagueRecord" : {
        "wins" : 29,
        "ot" : 8,
        "losses" : 18,
        "type" : "league"
      },
      "wildCardRank" : "0",
      "gamesPlayed" : 55,
      "leagueRank" : "11",
      "row" : 26,
      "goalsAgainst" : 154
    }, {
      "divisionRank" : "2",
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      },
      "streak" : {
        "streakType" : "wins",
        "streakNumber" : 1,
        "streakCode" : "W1"
      },
      "goalsScored" : 162,
      "conferenceRank" : "7",
      "points" : 66,
      "lastUpdated" : "2018-02-11T00:57:18Z",
      "leagueRecord" : {
        "wins" : 29,
        "ot" : 8,
        "losses" : 18,
        "type" : "league"
      },
      "wildCardRank" : "0",
      "gamesPlayed" : 55,
      "leagueRank" : "11",
      "row" : 26,
      "goalsAgainst" : 154
    } ]
  }, {
    "division" : {
      "name" : "Pacific",
      "link" : "/api/v1/divisions/15",
      "id" : 15
    },
    "conference" : {
      "name" : "Western",
      "link" : "/api/v1/conferences/5",
      "id" : 5
    },
    "standingsType" : "regularSeason",
    "league" : {
      "name" : "National Hockey League",
      "link" : "/api/v1/league/133",
      "id" : 133
    },
    "teamRecords" : [ {
      "divisionRank" : "2",
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      },
      "streak" : {
        "streakType" : "wins",
        "streakNumber" : 1,
        "streakCode" : "W1"
      },
      "goalsScored" : 162,
      "conferenceRank" : "7",
      "points" : 66,
      "lastUpdated" : "2018-02-11T00:57:18Z",
      "leagueRecord" : {
        "wins" : 29,
        "ot" : 8,
        "losses" : 18,
        "type" : "league"
      },
      "wildCardRank" : "0",
      "gamesPlayed" : 55,
      "leagueRank" : "11",
      "row" : 26,
      "goalsAgainst" : 154
    }, {
      "divisionRank" : "2",
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      },
      "streak" : {
        "streakType" : "wins",
        "streakNumber" : 1,
        "streakCode" : "W1"
      },
      "goalsScored" : 162,
      "conferenceRank" : "7",
      "points" : 66,
      "lastUpdated" : "2018-02-11T00:57:18Z",
      "leagueRecord" : {
        "wins" : 29,
        "ot" : 8,
        "losses" : 18,
        "type" : "league"
      },
      "wildCardRank" : "0",
      "gamesPlayed" : 55,
      "leagueRank" : "11",
      "row" : 26,
      "goalsAgainst" : 154
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

