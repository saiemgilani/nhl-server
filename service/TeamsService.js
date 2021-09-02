'use strict';


/**
 * Get an NHL team.
 *
 * id BigDecimal The ID of the team.
 * expand String Expand your response for some additional data. (optional)
 * season BigDecimal Return a team's specific season. (optional)
 * returns Team
 **/
exports.getTeam = function(id,expand,season) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "teamName" : "Sharks",
  "venue" : {
    "city" : "San Jose",
    "name" : "SAP Center at San Jose",
    "link" : "/api/v1/venues/null",
    "timeZone" : {
      "offset" : -8,
      "tz" : "PST",
      "id" : "America/Los_Angeles"
    }
  },
  "franchise" : {
    "name" : "Sharks",
    "link" : "/api/v1/franchises/29",
    "id" : 29
  },
  "locationName" : "San Jose",
  "conference" : {
    "name" : "Western",
    "link" : "/api/v1/conferences/5",
    "id" : 5
  },
  "firstYearOfPlay" : 1990,
  "link" : "/api/v1/teams/28",
  "officialSiteUrl" : "http://www.sjsharks.com",
  "active" : true,
  "abbreviation" : "SJS",
  "division" : {
    "name" : "Pacific",
    "link" : "/api/v1/divisions/15",
    "id" : 15
  },
  "roster" : {
    "roster" : [ {
      "person" : {
        "link" : "/api/v1/people/8466138",
        "fullName" : "Joe Thornton",
        "id" : 8466138
      },
      "jerseyNumber" : 19,
      "position" : {
        "code" : "C",
        "name" : "Center",
        "type" : "Forward",
        "abbreviation" : "C"
      }
    }, {
      "person" : {
        "link" : "/api/v1/people/8466138",
        "fullName" : "Joe Thornton",
        "id" : 8466138
      },
      "jerseyNumber" : 19,
      "position" : {
        "code" : "C",
        "name" : "Center",
        "type" : "Forward",
        "abbreviation" : "C"
      }
    } ]
  },
  "name" : "San Jose Sharks",
  "franchiseId" : 29,
  "nextGameSchedule" : {
    "totalItems" : 1,
    "totalGames" : 1,
    "totalEvents" : 0,
    "dates" : [ {
      "date" : "2018-02-10T00:00:00.000+00:00",
      "totalItems" : 1,
      "totalGames" : 1,
      "totalEvents" : 0,
      "games" : [ {
        "gamePk" : 2017020851,
        "gameType" : "R",
        "venue" : {
          "name" : "SAP Center at San Jose",
          "link" : "/api/v1/venues/null"
        },
        "teams" : {
          "away" : {
            "score" : 0,
            "leagueRecord" : {
              "wins" : 23,
              "ot" : 4,
              "losses" : 26,
              "type" : "league"
            },
            "team" : {
              "name" : "Edmonton Oilers",
              "link" : "/api/v1/teams/22",
              "id" : 22
            }
          },
          "home" : {
            "score" : 2,
            "leagueRecord" : {
              "wins" : 28,
              "ot" : 8,
              "losses" : 18,
              "type" : "league"
            },
            "team" : {
              "name" : "San Jose Sharks",
              "link" : "/api/v1/teams/28",
              "id" : 28
            }
          }
        },
        "gameDate" : "2018-02-11T03:00:00Z",
        "link" : "/api/v1/game/2017020851/feed/live",
        "season" : "20172018",
        "content" : {
          "link" : "/api/v1/game/2017020851/content"
        },
        "status" : {
          "codedGameState" : "3",
          "abstractGameState" : "Live",
          "detailedState" : "In Progress",
          "startTimeTBD" : true,
          "statusCode" : "2"
        }
      }, {
        "gamePk" : 2017020851,
        "gameType" : "R",
        "venue" : {
          "name" : "SAP Center at San Jose",
          "link" : "/api/v1/venues/null"
        },
        "teams" : {
          "away" : {
            "score" : 0,
            "leagueRecord" : {
              "wins" : 23,
              "ot" : 4,
              "losses" : 26,
              "type" : "league"
            },
            "team" : {
              "name" : "Edmonton Oilers",
              "link" : "/api/v1/teams/22",
              "id" : 22
            }
          },
          "home" : {
            "score" : 2,
            "leagueRecord" : {
              "wins" : 28,
              "ot" : 8,
              "losses" : 18,
              "type" : "league"
            },
            "team" : {
              "name" : "San Jose Sharks",
              "link" : "/api/v1/teams/28",
              "id" : 28
            }
          }
        },
        "gameDate" : "2018-02-11T03:00:00Z",
        "link" : "/api/v1/game/2017020851/feed/live",
        "season" : "20172018",
        "content" : {
          "link" : "/api/v1/game/2017020851/content"
        },
        "status" : {
          "codedGameState" : "3",
          "abstractGameState" : "Live",
          "detailedState" : "In Progress",
          "startTimeTBD" : true,
          "statusCode" : "2"
        }
      } ],
      "totalMatches" : 0,
      "matches" : [ { }, { } ],
      "events" : [ { }, { } ]
    }, {
      "date" : "2018-02-10T00:00:00.000+00:00",
      "totalItems" : 1,
      "totalGames" : 1,
      "totalEvents" : 0,
      "games" : [ {
        "gamePk" : 2017020851,
        "gameType" : "R",
        "venue" : {
          "name" : "SAP Center at San Jose",
          "link" : "/api/v1/venues/null"
        },
        "teams" : {
          "away" : {
            "score" : 0,
            "leagueRecord" : {
              "wins" : 23,
              "ot" : 4,
              "losses" : 26,
              "type" : "league"
            },
            "team" : {
              "name" : "Edmonton Oilers",
              "link" : "/api/v1/teams/22",
              "id" : 22
            }
          },
          "home" : {
            "score" : 2,
            "leagueRecord" : {
              "wins" : 28,
              "ot" : 8,
              "losses" : 18,
              "type" : "league"
            },
            "team" : {
              "name" : "San Jose Sharks",
              "link" : "/api/v1/teams/28",
              "id" : 28
            }
          }
        },
        "gameDate" : "2018-02-11T03:00:00Z",
        "link" : "/api/v1/game/2017020851/feed/live",
        "season" : "20172018",
        "content" : {
          "link" : "/api/v1/game/2017020851/content"
        },
        "status" : {
          "codedGameState" : "3",
          "abstractGameState" : "Live",
          "detailedState" : "In Progress",
          "startTimeTBD" : true,
          "statusCode" : "2"
        }
      }, {
        "gamePk" : 2017020851,
        "gameType" : "R",
        "venue" : {
          "name" : "SAP Center at San Jose",
          "link" : "/api/v1/venues/null"
        },
        "teams" : {
          "away" : {
            "score" : 0,
            "leagueRecord" : {
              "wins" : 23,
              "ot" : 4,
              "losses" : 26,
              "type" : "league"
            },
            "team" : {
              "name" : "Edmonton Oilers",
              "link" : "/api/v1/teams/22",
              "id" : 22
            }
          },
          "home" : {
            "score" : 2,
            "leagueRecord" : {
              "wins" : 28,
              "ot" : 8,
              "losses" : 18,
              "type" : "league"
            },
            "team" : {
              "name" : "San Jose Sharks",
              "link" : "/api/v1/teams/28",
              "id" : 28
            }
          }
        },
        "gameDate" : "2018-02-11T03:00:00Z",
        "link" : "/api/v1/game/2017020851/feed/live",
        "season" : "20172018",
        "content" : {
          "link" : "/api/v1/game/2017020851/content"
        },
        "status" : {
          "codedGameState" : "3",
          "abstractGameState" : "Live",
          "detailedState" : "In Progress",
          "startTimeTBD" : true,
          "statusCode" : "2"
        }
      } ],
      "totalMatches" : 0,
      "matches" : [ { }, { } ],
      "events" : [ { }, { } ]
    } ],
    "totalMatches" : 0
  },
  "id" : 28,
  "triCode" : "SJS",
  "shortName" : "San Jose"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an NHL team's roster.
 *
 * id BigDecimal The ID of the team.
 * season BigDecimal Return a team's specific season. (optional)
 * returns Rosters
 **/
exports.getTeamRoster = function(id,season) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "teams" : [ {
    "person" : {
      "link" : "/api/v1/people/8466138",
      "fullName" : "Joe Thornton",
      "id" : 8466138
    },
    "jerseyNumber" : 19,
    "position" : {
      "code" : "C",
      "name" : "Center",
      "type" : "Forward",
      "abbreviation" : "C"
    }
  }, {
    "person" : {
      "link" : "/api/v1/people/8466138",
      "fullName" : "Joe Thornton",
      "id" : 8466138
    },
    "jerseyNumber" : 19,
    "position" : {
      "code" : "C",
      "name" : "Center",
      "type" : "Forward",
      "abbreviation" : "C"
    }
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
 * Get all statistics for an NHL team.
 *
 * id BigDecimal The ID of the team.
 * returns TeamStats
 **/
exports.getTeamStats = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "stats" : [ {
    "splits" : [ {
      "stat" : {
        "powerPlayOpportunities" : 184,
        "losses" : 18,
        "gamesPlayed" : 55,
        "winOutshotByOpp" : 0.6,
        "winLeadFirstPer" : 0.85,
        "faceOffsWon" : 1675,
        "shotsPerGame" : 32.8,
        "winOutshootOpp" : 0.467,
        "shootingPctg" : 8.8,
        "wins" : 29,
        "winScoreFirst" : 0.679,
        "ot" : 8,
        "powerPlayGoals" : 44,
        "ptPctg" : "60.0",
        "faceOffsTaken" : 3300,
        "pts" : 66,
        "faceOffsLost" : 1625,
        "shotsAllowed" : 30.2182,
        "powerPlayPercentage" : "23.9",
        "winOppScoreFirst" : 0.37,
        "winLeadSecondPer" : 0.952,
        "evGGARatio" : 0.8532,
        "faceOffWinPercentage" : "50.8",
        "savePctg" : 0.909,
        "penaltyKillPercentage" : "84.6",
        "goalsAgainstPerGame" : 2.745,
        "goalsPerGame" : 2.891,
        "powerPlayGoalsAgainst" : 26
      },
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      }
    }, {
      "stat" : {
        "powerPlayOpportunities" : 184,
        "losses" : 18,
        "gamesPlayed" : 55,
        "winOutshotByOpp" : 0.6,
        "winLeadFirstPer" : 0.85,
        "faceOffsWon" : 1675,
        "shotsPerGame" : 32.8,
        "winOutshootOpp" : 0.467,
        "shootingPctg" : 8.8,
        "wins" : 29,
        "winScoreFirst" : 0.679,
        "ot" : 8,
        "powerPlayGoals" : 44,
        "ptPctg" : "60.0",
        "faceOffsTaken" : 3300,
        "pts" : 66,
        "faceOffsLost" : 1625,
        "shotsAllowed" : 30.2182,
        "powerPlayPercentage" : "23.9",
        "winOppScoreFirst" : 0.37,
        "winLeadSecondPer" : 0.952,
        "evGGARatio" : 0.8532,
        "faceOffWinPercentage" : "50.8",
        "savePctg" : 0.909,
        "penaltyKillPercentage" : "84.6",
        "goalsAgainstPerGame" : 2.745,
        "goalsPerGame" : 2.891,
        "powerPlayGoalsAgainst" : 26
      },
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      }
    } ],
    "type" : {
      "displayName" : "statsSingleSeason"
    }
  }, {
    "splits" : [ {
      "stat" : {
        "powerPlayOpportunities" : 184,
        "losses" : 18,
        "gamesPlayed" : 55,
        "winOutshotByOpp" : 0.6,
        "winLeadFirstPer" : 0.85,
        "faceOffsWon" : 1675,
        "shotsPerGame" : 32.8,
        "winOutshootOpp" : 0.467,
        "shootingPctg" : 8.8,
        "wins" : 29,
        "winScoreFirst" : 0.679,
        "ot" : 8,
        "powerPlayGoals" : 44,
        "ptPctg" : "60.0",
        "faceOffsTaken" : 3300,
        "pts" : 66,
        "faceOffsLost" : 1625,
        "shotsAllowed" : 30.2182,
        "powerPlayPercentage" : "23.9",
        "winOppScoreFirst" : 0.37,
        "winLeadSecondPer" : 0.952,
        "evGGARatio" : 0.8532,
        "faceOffWinPercentage" : "50.8",
        "savePctg" : 0.909,
        "penaltyKillPercentage" : "84.6",
        "goalsAgainstPerGame" : 2.745,
        "goalsPerGame" : 2.891,
        "powerPlayGoalsAgainst" : 26
      },
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      }
    }, {
      "stat" : {
        "powerPlayOpportunities" : 184,
        "losses" : 18,
        "gamesPlayed" : 55,
        "winOutshotByOpp" : 0.6,
        "winLeadFirstPer" : 0.85,
        "faceOffsWon" : 1675,
        "shotsPerGame" : 32.8,
        "winOutshootOpp" : 0.467,
        "shootingPctg" : 8.8,
        "wins" : 29,
        "winScoreFirst" : 0.679,
        "ot" : 8,
        "powerPlayGoals" : 44,
        "ptPctg" : "60.0",
        "faceOffsTaken" : 3300,
        "pts" : 66,
        "faceOffsLost" : 1625,
        "shotsAllowed" : 30.2182,
        "powerPlayPercentage" : "23.9",
        "winOppScoreFirst" : 0.37,
        "winLeadSecondPer" : 0.952,
        "evGGARatio" : 0.8532,
        "faceOffWinPercentage" : "50.8",
        "savePctg" : 0.909,
        "penaltyKillPercentage" : "84.6",
        "goalsAgainstPerGame" : 2.745,
        "goalsPerGame" : 2.891,
        "powerPlayGoalsAgainst" : 26
      },
      "team" : {
        "name" : "San Jose Sharks",
        "link" : "/api/v1/teams/28",
        "id" : 28
      }
    } ],
    "type" : {
      "displayName" : "statsSingleSeason"
    }
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
 * Get all NHL teams.
 *
 * expand String Expand your response for some additional data. (optional)
 * season BigDecimal Return a team's specific season. (optional)
 * returns Teams
 **/
exports.getTeams = function(expand,season) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "teams" : [ {
    "teamName" : "Sharks",
    "venue" : {
      "city" : "San Jose",
      "name" : "SAP Center at San Jose",
      "link" : "/api/v1/venues/null",
      "timeZone" : {
        "offset" : -8,
        "tz" : "PST",
        "id" : "America/Los_Angeles"
      }
    },
    "franchise" : {
      "name" : "Sharks",
      "link" : "/api/v1/franchises/29",
      "id" : 29
    },
    "locationName" : "San Jose",
    "conference" : {
      "name" : "Western",
      "link" : "/api/v1/conferences/5",
      "id" : 5
    },
    "firstYearOfPlay" : 1990,
    "link" : "/api/v1/teams/28",
    "officialSiteUrl" : "http://www.sjsharks.com",
    "active" : true,
    "abbreviation" : "SJS",
    "division" : {
      "name" : "Pacific",
      "link" : "/api/v1/divisions/15",
      "id" : 15
    },
    "roster" : {
      "roster" : [ {
        "person" : {
          "link" : "/api/v1/people/8466138",
          "fullName" : "Joe Thornton",
          "id" : 8466138
        },
        "jerseyNumber" : 19,
        "position" : {
          "code" : "C",
          "name" : "Center",
          "type" : "Forward",
          "abbreviation" : "C"
        }
      }, {
        "person" : {
          "link" : "/api/v1/people/8466138",
          "fullName" : "Joe Thornton",
          "id" : 8466138
        },
        "jerseyNumber" : 19,
        "position" : {
          "code" : "C",
          "name" : "Center",
          "type" : "Forward",
          "abbreviation" : "C"
        }
      } ]
    },
    "name" : "San Jose Sharks",
    "franchiseId" : 29,
    "nextGameSchedule" : {
      "totalItems" : 1,
      "totalGames" : 1,
      "totalEvents" : 0,
      "dates" : [ {
        "date" : "2018-02-10T00:00:00.000+00:00",
        "totalItems" : 1,
        "totalGames" : 1,
        "totalEvents" : 0,
        "games" : [ {
          "gamePk" : 2017020851,
          "gameType" : "R",
          "venue" : {
            "name" : "SAP Center at San Jose",
            "link" : "/api/v1/venues/null"
          },
          "teams" : {
            "away" : {
              "score" : 0,
              "leagueRecord" : {
                "wins" : 23,
                "ot" : 4,
                "losses" : 26,
                "type" : "league"
              },
              "team" : {
                "name" : "Edmonton Oilers",
                "link" : "/api/v1/teams/22",
                "id" : 22
              }
            },
            "home" : {
              "score" : 2,
              "leagueRecord" : {
                "wins" : 28,
                "ot" : 8,
                "losses" : 18,
                "type" : "league"
              },
              "team" : {
                "name" : "San Jose Sharks",
                "link" : "/api/v1/teams/28",
                "id" : 28
              }
            }
          },
          "gameDate" : "2018-02-11T03:00:00Z",
          "link" : "/api/v1/game/2017020851/feed/live",
          "season" : "20172018",
          "content" : {
            "link" : "/api/v1/game/2017020851/content"
          },
          "status" : {
            "codedGameState" : "3",
            "abstractGameState" : "Live",
            "detailedState" : "In Progress",
            "startTimeTBD" : true,
            "statusCode" : "2"
          }
        }, {
          "gamePk" : 2017020851,
          "gameType" : "R",
          "venue" : {
            "name" : "SAP Center at San Jose",
            "link" : "/api/v1/venues/null"
          },
          "teams" : {
            "away" : {
              "score" : 0,
              "leagueRecord" : {
                "wins" : 23,
                "ot" : 4,
                "losses" : 26,
                "type" : "league"
              },
              "team" : {
                "name" : "Edmonton Oilers",
                "link" : "/api/v1/teams/22",
                "id" : 22
              }
            },
            "home" : {
              "score" : 2,
              "leagueRecord" : {
                "wins" : 28,
                "ot" : 8,
                "losses" : 18,
                "type" : "league"
              },
              "team" : {
                "name" : "San Jose Sharks",
                "link" : "/api/v1/teams/28",
                "id" : 28
              }
            }
          },
          "gameDate" : "2018-02-11T03:00:00Z",
          "link" : "/api/v1/game/2017020851/feed/live",
          "season" : "20172018",
          "content" : {
            "link" : "/api/v1/game/2017020851/content"
          },
          "status" : {
            "codedGameState" : "3",
            "abstractGameState" : "Live",
            "detailedState" : "In Progress",
            "startTimeTBD" : true,
            "statusCode" : "2"
          }
        } ],
        "totalMatches" : 0,
        "matches" : [ { }, { } ],
        "events" : [ { }, { } ]
      }, {
        "date" : "2018-02-10T00:00:00.000+00:00",
        "totalItems" : 1,
        "totalGames" : 1,
        "totalEvents" : 0,
        "games" : [ {
          "gamePk" : 2017020851,
          "gameType" : "R",
          "venue" : {
            "name" : "SAP Center at San Jose",
            "link" : "/api/v1/venues/null"
          },
          "teams" : {
            "away" : {
              "score" : 0,
              "leagueRecord" : {
                "wins" : 23,
                "ot" : 4,
                "losses" : 26,
                "type" : "league"
              },
              "team" : {
                "name" : "Edmonton Oilers",
                "link" : "/api/v1/teams/22",
                "id" : 22
              }
            },
            "home" : {
              "score" : 2,
              "leagueRecord" : {
                "wins" : 28,
                "ot" : 8,
                "losses" : 18,
                "type" : "league"
              },
              "team" : {
                "name" : "San Jose Sharks",
                "link" : "/api/v1/teams/28",
                "id" : 28
              }
            }
          },
          "gameDate" : "2018-02-11T03:00:00Z",
          "link" : "/api/v1/game/2017020851/feed/live",
          "season" : "20172018",
          "content" : {
            "link" : "/api/v1/game/2017020851/content"
          },
          "status" : {
            "codedGameState" : "3",
            "abstractGameState" : "Live",
            "detailedState" : "In Progress",
            "startTimeTBD" : true,
            "statusCode" : "2"
          }
        }, {
          "gamePk" : 2017020851,
          "gameType" : "R",
          "venue" : {
            "name" : "SAP Center at San Jose",
            "link" : "/api/v1/venues/null"
          },
          "teams" : {
            "away" : {
              "score" : 0,
              "leagueRecord" : {
                "wins" : 23,
                "ot" : 4,
                "losses" : 26,
                "type" : "league"
              },
              "team" : {
                "name" : "Edmonton Oilers",
                "link" : "/api/v1/teams/22",
                "id" : 22
              }
            },
            "home" : {
              "score" : 2,
              "leagueRecord" : {
                "wins" : 28,
                "ot" : 8,
                "losses" : 18,
                "type" : "league"
              },
              "team" : {
                "name" : "San Jose Sharks",
                "link" : "/api/v1/teams/28",
                "id" : 28
              }
            }
          },
          "gameDate" : "2018-02-11T03:00:00Z",
          "link" : "/api/v1/game/2017020851/feed/live",
          "season" : "20172018",
          "content" : {
            "link" : "/api/v1/game/2017020851/content"
          },
          "status" : {
            "codedGameState" : "3",
            "abstractGameState" : "Live",
            "detailedState" : "In Progress",
            "startTimeTBD" : true,
            "statusCode" : "2"
          }
        } ],
        "totalMatches" : 0,
        "matches" : [ { }, { } ],
        "events" : [ { }, { } ]
      } ],
      "totalMatches" : 0
    },
    "id" : 28,
    "triCode" : "SJS",
    "shortName" : "San Jose"
  }, {
    "teamName" : "Sharks",
    "venue" : {
      "city" : "San Jose",
      "name" : "SAP Center at San Jose",
      "link" : "/api/v1/venues/null",
      "timeZone" : {
        "offset" : -8,
        "tz" : "PST",
        "id" : "America/Los_Angeles"
      }
    },
    "franchise" : {
      "name" : "Sharks",
      "link" : "/api/v1/franchises/29",
      "id" : 29
    },
    "locationName" : "San Jose",
    "conference" : {
      "name" : "Western",
      "link" : "/api/v1/conferences/5",
      "id" : 5
    },
    "firstYearOfPlay" : 1990,
    "link" : "/api/v1/teams/28",
    "officialSiteUrl" : "http://www.sjsharks.com",
    "active" : true,
    "abbreviation" : "SJS",
    "division" : {
      "name" : "Pacific",
      "link" : "/api/v1/divisions/15",
      "id" : 15
    },
    "roster" : {
      "roster" : [ {
        "person" : {
          "link" : "/api/v1/people/8466138",
          "fullName" : "Joe Thornton",
          "id" : 8466138
        },
        "jerseyNumber" : 19,
        "position" : {
          "code" : "C",
          "name" : "Center",
          "type" : "Forward",
          "abbreviation" : "C"
        }
      }, {
        "person" : {
          "link" : "/api/v1/people/8466138",
          "fullName" : "Joe Thornton",
          "id" : 8466138
        },
        "jerseyNumber" : 19,
        "position" : {
          "code" : "C",
          "name" : "Center",
          "type" : "Forward",
          "abbreviation" : "C"
        }
      } ]
    },
    "name" : "San Jose Sharks",
    "franchiseId" : 29,
    "nextGameSchedule" : {
      "totalItems" : 1,
      "totalGames" : 1,
      "totalEvents" : 0,
      "dates" : [ {
        "date" : "2018-02-10T00:00:00.000+00:00",
        "totalItems" : 1,
        "totalGames" : 1,
        "totalEvents" : 0,
        "games" : [ {
          "gamePk" : 2017020851,
          "gameType" : "R",
          "venue" : {
            "name" : "SAP Center at San Jose",
            "link" : "/api/v1/venues/null"
          },
          "teams" : {
            "away" : {
              "score" : 0,
              "leagueRecord" : {
                "wins" : 23,
                "ot" : 4,
                "losses" : 26,
                "type" : "league"
              },
              "team" : {
                "name" : "Edmonton Oilers",
                "link" : "/api/v1/teams/22",
                "id" : 22
              }
            },
            "home" : {
              "score" : 2,
              "leagueRecord" : {
                "wins" : 28,
                "ot" : 8,
                "losses" : 18,
                "type" : "league"
              },
              "team" : {
                "name" : "San Jose Sharks",
                "link" : "/api/v1/teams/28",
                "id" : 28
              }
            }
          },
          "gameDate" : "2018-02-11T03:00:00Z",
          "link" : "/api/v1/game/2017020851/feed/live",
          "season" : "20172018",
          "content" : {
            "link" : "/api/v1/game/2017020851/content"
          },
          "status" : {
            "codedGameState" : "3",
            "abstractGameState" : "Live",
            "detailedState" : "In Progress",
            "startTimeTBD" : true,
            "statusCode" : "2"
          }
        }, {
          "gamePk" : 2017020851,
          "gameType" : "R",
          "venue" : {
            "name" : "SAP Center at San Jose",
            "link" : "/api/v1/venues/null"
          },
          "teams" : {
            "away" : {
              "score" : 0,
              "leagueRecord" : {
                "wins" : 23,
                "ot" : 4,
                "losses" : 26,
                "type" : "league"
              },
              "team" : {
                "name" : "Edmonton Oilers",
                "link" : "/api/v1/teams/22",
                "id" : 22
              }
            },
            "home" : {
              "score" : 2,
              "leagueRecord" : {
                "wins" : 28,
                "ot" : 8,
                "losses" : 18,
                "type" : "league"
              },
              "team" : {
                "name" : "San Jose Sharks",
                "link" : "/api/v1/teams/28",
                "id" : 28
              }
            }
          },
          "gameDate" : "2018-02-11T03:00:00Z",
          "link" : "/api/v1/game/2017020851/feed/live",
          "season" : "20172018",
          "content" : {
            "link" : "/api/v1/game/2017020851/content"
          },
          "status" : {
            "codedGameState" : "3",
            "abstractGameState" : "Live",
            "detailedState" : "In Progress",
            "startTimeTBD" : true,
            "statusCode" : "2"
          }
        } ],
        "totalMatches" : 0,
        "matches" : [ { }, { } ],
        "events" : [ { }, { } ]
      }, {
        "date" : "2018-02-10T00:00:00.000+00:00",
        "totalItems" : 1,
        "totalGames" : 1,
        "totalEvents" : 0,
        "games" : [ {
          "gamePk" : 2017020851,
          "gameType" : "R",
          "venue" : {
            "name" : "SAP Center at San Jose",
            "link" : "/api/v1/venues/null"
          },
          "teams" : {
            "away" : {
              "score" : 0,
              "leagueRecord" : {
                "wins" : 23,
                "ot" : 4,
                "losses" : 26,
                "type" : "league"
              },
              "team" : {
                "name" : "Edmonton Oilers",
                "link" : "/api/v1/teams/22",
                "id" : 22
              }
            },
            "home" : {
              "score" : 2,
              "leagueRecord" : {
                "wins" : 28,
                "ot" : 8,
                "losses" : 18,
                "type" : "league"
              },
              "team" : {
                "name" : "San Jose Sharks",
                "link" : "/api/v1/teams/28",
                "id" : 28
              }
            }
          },
          "gameDate" : "2018-02-11T03:00:00Z",
          "link" : "/api/v1/game/2017020851/feed/live",
          "season" : "20172018",
          "content" : {
            "link" : "/api/v1/game/2017020851/content"
          },
          "status" : {
            "codedGameState" : "3",
            "abstractGameState" : "Live",
            "detailedState" : "In Progress",
            "startTimeTBD" : true,
            "statusCode" : "2"
          }
        }, {
          "gamePk" : 2017020851,
          "gameType" : "R",
          "venue" : {
            "name" : "SAP Center at San Jose",
            "link" : "/api/v1/venues/null"
          },
          "teams" : {
            "away" : {
              "score" : 0,
              "leagueRecord" : {
                "wins" : 23,
                "ot" : 4,
                "losses" : 26,
                "type" : "league"
              },
              "team" : {
                "name" : "Edmonton Oilers",
                "link" : "/api/v1/teams/22",
                "id" : 22
              }
            },
            "home" : {
              "score" : 2,
              "leagueRecord" : {
                "wins" : 28,
                "ot" : 8,
                "losses" : 18,
                "type" : "league"
              },
              "team" : {
                "name" : "San Jose Sharks",
                "link" : "/api/v1/teams/28",
                "id" : 28
              }
            }
          },
          "gameDate" : "2018-02-11T03:00:00Z",
          "link" : "/api/v1/game/2017020851/feed/live",
          "season" : "20172018",
          "content" : {
            "link" : "/api/v1/game/2017020851/content"
          },
          "status" : {
            "codedGameState" : "3",
            "abstractGameState" : "Live",
            "detailedState" : "In Progress",
            "startTimeTBD" : true,
            "statusCode" : "2"
          }
        } ],
        "totalMatches" : 0,
        "matches" : [ { }, { } ],
        "events" : [ { }, { } ]
      } ],
      "totalMatches" : 0
    },
    "id" : 28,
    "triCode" : "SJS",
    "shortName" : "San Jose"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

