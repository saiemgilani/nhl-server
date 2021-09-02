'use strict';


/**
 * Get the NHL game schedule.
 *
 * expand String Expand explanations:   * `schedule.brodcasts` - Shows the broadcasts of the game.   * `schedule.linescore` - Linescore for completed games.   * `schedule.ticket` - Provides the different places to buy tickets for the upcoming games.   * `team.schedule.previous` - Same as above but for the last game played.  (optional)
 * teamId String Limit results to a specific team. Team ids can be found through the teams endpoint (optional)
 * startDate date Start date for the search. (optional)
 * endDate date End date for the search. (optional)
 * returns Schedule
 **/
exports.getSchedule = function(expand,teamId,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "totalItems" : 9,
  "wait" : 10,
  "totalGames" : 9,
  "totalEvents" : 0,
  "dates" : [ {
    "date" : "2018-02-10T00:00:00.000+00:00",
    "totalItems" : 9,
    "totalGames" : 9,
    "totalEvents" : 0,
    "games" : [ {
      "gamePk" : 2017020851,
      "gameType" : "R",
      "venue" : {
        "name" : "SAP Center at San Jose",
        "link" : "/api/v1/venues/null"
      },
      "tickets" : [ {
        "ticketType" : "buysell",
        "ticketLink" : "http://www.ticketmaster.com/event/090052DD92E620B4?BRAND=ducks&extcmp=tm208344&utm_source=NHL.com&utm_medium=client&utm_campaign=NHL_LEAGUE_ANA&utm_content=SCHEDULE_PAGE&camefrom=CFC_DUCKS_1718_Web_DucksSchedule"
      }, {
        "ticketType" : "buysell",
        "ticketLink" : "http://www.ticketmaster.com/event/090052DD92E620B4?BRAND=ducks&extcmp=tm208344&utm_source=NHL.com&utm_medium=client&utm_campaign=NHL_LEAGUE_ANA&utm_content=SCHEDULE_PAGE&camefrom=CFC_DUCKS_1718_Web_DucksSchedule"
      } ],
      "teams" : {
        "away" : {
          "score" : 4,
          "leagueRecord" : {
            "wins" : 23,
            "ot" : 4,
            "losses" : 27,
            "type" : "league"
          },
          "team" : {
            "name" : "Edmonton Oilers",
            "link" : "/api/v1/teams/22",
            "id" : 22
          }
        },
        "home" : {
          "score" : 6,
          "leagueRecord" : {
            "wins" : 29,
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
      "linescore" : {
        "teams" : {
          "home" : {
            "powerPlay" : true,
            "shotsOnGoal" : 30,
            "team" : {
              "name" : "San Jose Sharks",
              "link" : "/api/v1/teams/28",
              "id" : 28,
              "triCode" : "SJS",
              "abbreviation" : "SJS"
            },
            "numSkaters" : 5,
            "goaliePulled" : true,
            "goals" : 6
          }
        },
        "periods" : [ {
          "periodType" : "REGULAR",
          "away" : {
            "shotsOnGoal" : 9,
            "goals" : 0,
            "rinkSide" : "right"
          },
          "ordinalNum" : "1st",
          "num" : 1,
          "startTime" : "2018-02-11T03:09:50Z",
          "endTime" : "2018-02-11T03:44:47Z",
          "home" : {
            "shotsOnGoal" : 14,
            "goals" : 2,
            "rinkSide" : "left"
          }
        }, {
          "periodType" : "REGULAR",
          "away" : {
            "shotsOnGoal" : 9,
            "goals" : 0,
            "rinkSide" : "right"
          },
          "ordinalNum" : "1st",
          "num" : 1,
          "startTime" : "2018-02-11T03:09:50Z",
          "endTime" : "2018-02-11T03:44:47Z",
          "home" : {
            "shotsOnGoal" : 14,
            "goals" : 2,
            "rinkSide" : "left"
          }
        } ],
        "powerPlayStrength" : "Even",
        "hasShootout" : true,
        "intermissionInfo" : {
          "intermissionTimeRemaining" : 0,
          "intermissionTimeElapsed" : 0,
          "inIntermission" : true
        },
        "powerPlayInfo" : {
          "inSituation" : true,
          "situationTimeElapsed" : 72,
          "situationTimeRemaining" : 0
        },
        "currentPeriodOrdinal" : "3rd",
        "currentPeriodTimeRemaining" : "Final",
        "currentPeriod" : 3,
        "shootoutInfo" : {
          "away" : {
            "scores" : 0,
            "attempts" : 0
          }
        }
      },
      "content" : {
        "link" : "/api/v1/game/2017020851/content"
      },
      "status" : {
        "codedGameState" : "7",
        "abstractGameState" : "Final",
        "detailedState" : "Final",
        "startTimeTBD" : true,
        "statusCode" : "7"
      }
    }, {
      "gamePk" : 2017020851,
      "gameType" : "R",
      "venue" : {
        "name" : "SAP Center at San Jose",
        "link" : "/api/v1/venues/null"
      },
      "tickets" : [ {
        "ticketType" : "buysell",
        "ticketLink" : "http://www.ticketmaster.com/event/090052DD92E620B4?BRAND=ducks&extcmp=tm208344&utm_source=NHL.com&utm_medium=client&utm_campaign=NHL_LEAGUE_ANA&utm_content=SCHEDULE_PAGE&camefrom=CFC_DUCKS_1718_Web_DucksSchedule"
      }, {
        "ticketType" : "buysell",
        "ticketLink" : "http://www.ticketmaster.com/event/090052DD92E620B4?BRAND=ducks&extcmp=tm208344&utm_source=NHL.com&utm_medium=client&utm_campaign=NHL_LEAGUE_ANA&utm_content=SCHEDULE_PAGE&camefrom=CFC_DUCKS_1718_Web_DucksSchedule"
      } ],
      "teams" : {
        "away" : {
          "score" : 4,
          "leagueRecord" : {
            "wins" : 23,
            "ot" : 4,
            "losses" : 27,
            "type" : "league"
          },
          "team" : {
            "name" : "Edmonton Oilers",
            "link" : "/api/v1/teams/22",
            "id" : 22
          }
        },
        "home" : {
          "score" : 6,
          "leagueRecord" : {
            "wins" : 29,
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
      "linescore" : {
        "teams" : {
          "home" : {
            "powerPlay" : true,
            "shotsOnGoal" : 30,
            "team" : {
              "name" : "San Jose Sharks",
              "link" : "/api/v1/teams/28",
              "id" : 28,
              "triCode" : "SJS",
              "abbreviation" : "SJS"
            },
            "numSkaters" : 5,
            "goaliePulled" : true,
            "goals" : 6
          }
        },
        "periods" : [ {
          "periodType" : "REGULAR",
          "away" : {
            "shotsOnGoal" : 9,
            "goals" : 0,
            "rinkSide" : "right"
          },
          "ordinalNum" : "1st",
          "num" : 1,
          "startTime" : "2018-02-11T03:09:50Z",
          "endTime" : "2018-02-11T03:44:47Z",
          "home" : {
            "shotsOnGoal" : 14,
            "goals" : 2,
            "rinkSide" : "left"
          }
        }, {
          "periodType" : "REGULAR",
          "away" : {
            "shotsOnGoal" : 9,
            "goals" : 0,
            "rinkSide" : "right"
          },
          "ordinalNum" : "1st",
          "num" : 1,
          "startTime" : "2018-02-11T03:09:50Z",
          "endTime" : "2018-02-11T03:44:47Z",
          "home" : {
            "shotsOnGoal" : 14,
            "goals" : 2,
            "rinkSide" : "left"
          }
        } ],
        "powerPlayStrength" : "Even",
        "hasShootout" : true,
        "intermissionInfo" : {
          "intermissionTimeRemaining" : 0,
          "intermissionTimeElapsed" : 0,
          "inIntermission" : true
        },
        "powerPlayInfo" : {
          "inSituation" : true,
          "situationTimeElapsed" : 72,
          "situationTimeRemaining" : 0
        },
        "currentPeriodOrdinal" : "3rd",
        "currentPeriodTimeRemaining" : "Final",
        "currentPeriod" : 3,
        "shootoutInfo" : {
          "away" : {
            "scores" : 0,
            "attempts" : 0
          }
        }
      },
      "content" : {
        "link" : "/api/v1/game/2017020851/content"
      },
      "status" : {
        "codedGameState" : "7",
        "abstractGameState" : "Final",
        "detailedState" : "Final",
        "startTimeTBD" : true,
        "statusCode" : "7"
      }
    } ],
    "totalMatches" : 0,
    "matches" : [ { }, { } ],
    "events" : [ { }, { } ]
  }, {
    "date" : "2018-02-10T00:00:00.000+00:00",
    "totalItems" : 9,
    "totalGames" : 9,
    "totalEvents" : 0,
    "games" : [ {
      "gamePk" : 2017020851,
      "gameType" : "R",
      "venue" : {
        "name" : "SAP Center at San Jose",
        "link" : "/api/v1/venues/null"
      },
      "tickets" : [ {
        "ticketType" : "buysell",
        "ticketLink" : "http://www.ticketmaster.com/event/090052DD92E620B4?BRAND=ducks&extcmp=tm208344&utm_source=NHL.com&utm_medium=client&utm_campaign=NHL_LEAGUE_ANA&utm_content=SCHEDULE_PAGE&camefrom=CFC_DUCKS_1718_Web_DucksSchedule"
      }, {
        "ticketType" : "buysell",
        "ticketLink" : "http://www.ticketmaster.com/event/090052DD92E620B4?BRAND=ducks&extcmp=tm208344&utm_source=NHL.com&utm_medium=client&utm_campaign=NHL_LEAGUE_ANA&utm_content=SCHEDULE_PAGE&camefrom=CFC_DUCKS_1718_Web_DucksSchedule"
      } ],
      "teams" : {
        "away" : {
          "score" : 4,
          "leagueRecord" : {
            "wins" : 23,
            "ot" : 4,
            "losses" : 27,
            "type" : "league"
          },
          "team" : {
            "name" : "Edmonton Oilers",
            "link" : "/api/v1/teams/22",
            "id" : 22
          }
        },
        "home" : {
          "score" : 6,
          "leagueRecord" : {
            "wins" : 29,
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
      "linescore" : {
        "teams" : {
          "home" : {
            "powerPlay" : true,
            "shotsOnGoal" : 30,
            "team" : {
              "name" : "San Jose Sharks",
              "link" : "/api/v1/teams/28",
              "id" : 28,
              "triCode" : "SJS",
              "abbreviation" : "SJS"
            },
            "numSkaters" : 5,
            "goaliePulled" : true,
            "goals" : 6
          }
        },
        "periods" : [ {
          "periodType" : "REGULAR",
          "away" : {
            "shotsOnGoal" : 9,
            "goals" : 0,
            "rinkSide" : "right"
          },
          "ordinalNum" : "1st",
          "num" : 1,
          "startTime" : "2018-02-11T03:09:50Z",
          "endTime" : "2018-02-11T03:44:47Z",
          "home" : {
            "shotsOnGoal" : 14,
            "goals" : 2,
            "rinkSide" : "left"
          }
        }, {
          "periodType" : "REGULAR",
          "away" : {
            "shotsOnGoal" : 9,
            "goals" : 0,
            "rinkSide" : "right"
          },
          "ordinalNum" : "1st",
          "num" : 1,
          "startTime" : "2018-02-11T03:09:50Z",
          "endTime" : "2018-02-11T03:44:47Z",
          "home" : {
            "shotsOnGoal" : 14,
            "goals" : 2,
            "rinkSide" : "left"
          }
        } ],
        "powerPlayStrength" : "Even",
        "hasShootout" : true,
        "intermissionInfo" : {
          "intermissionTimeRemaining" : 0,
          "intermissionTimeElapsed" : 0,
          "inIntermission" : true
        },
        "powerPlayInfo" : {
          "inSituation" : true,
          "situationTimeElapsed" : 72,
          "situationTimeRemaining" : 0
        },
        "currentPeriodOrdinal" : "3rd",
        "currentPeriodTimeRemaining" : "Final",
        "currentPeriod" : 3,
        "shootoutInfo" : {
          "away" : {
            "scores" : 0,
            "attempts" : 0
          }
        }
      },
      "content" : {
        "link" : "/api/v1/game/2017020851/content"
      },
      "status" : {
        "codedGameState" : "7",
        "abstractGameState" : "Final",
        "detailedState" : "Final",
        "startTimeTBD" : true,
        "statusCode" : "7"
      }
    }, {
      "gamePk" : 2017020851,
      "gameType" : "R",
      "venue" : {
        "name" : "SAP Center at San Jose",
        "link" : "/api/v1/venues/null"
      },
      "tickets" : [ {
        "ticketType" : "buysell",
        "ticketLink" : "http://www.ticketmaster.com/event/090052DD92E620B4?BRAND=ducks&extcmp=tm208344&utm_source=NHL.com&utm_medium=client&utm_campaign=NHL_LEAGUE_ANA&utm_content=SCHEDULE_PAGE&camefrom=CFC_DUCKS_1718_Web_DucksSchedule"
      }, {
        "ticketType" : "buysell",
        "ticketLink" : "http://www.ticketmaster.com/event/090052DD92E620B4?BRAND=ducks&extcmp=tm208344&utm_source=NHL.com&utm_medium=client&utm_campaign=NHL_LEAGUE_ANA&utm_content=SCHEDULE_PAGE&camefrom=CFC_DUCKS_1718_Web_DucksSchedule"
      } ],
      "teams" : {
        "away" : {
          "score" : 4,
          "leagueRecord" : {
            "wins" : 23,
            "ot" : 4,
            "losses" : 27,
            "type" : "league"
          },
          "team" : {
            "name" : "Edmonton Oilers",
            "link" : "/api/v1/teams/22",
            "id" : 22
          }
        },
        "home" : {
          "score" : 6,
          "leagueRecord" : {
            "wins" : 29,
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
      "linescore" : {
        "teams" : {
          "home" : {
            "powerPlay" : true,
            "shotsOnGoal" : 30,
            "team" : {
              "name" : "San Jose Sharks",
              "link" : "/api/v1/teams/28",
              "id" : 28,
              "triCode" : "SJS",
              "abbreviation" : "SJS"
            },
            "numSkaters" : 5,
            "goaliePulled" : true,
            "goals" : 6
          }
        },
        "periods" : [ {
          "periodType" : "REGULAR",
          "away" : {
            "shotsOnGoal" : 9,
            "goals" : 0,
            "rinkSide" : "right"
          },
          "ordinalNum" : "1st",
          "num" : 1,
          "startTime" : "2018-02-11T03:09:50Z",
          "endTime" : "2018-02-11T03:44:47Z",
          "home" : {
            "shotsOnGoal" : 14,
            "goals" : 2,
            "rinkSide" : "left"
          }
        }, {
          "periodType" : "REGULAR",
          "away" : {
            "shotsOnGoal" : 9,
            "goals" : 0,
            "rinkSide" : "right"
          },
          "ordinalNum" : "1st",
          "num" : 1,
          "startTime" : "2018-02-11T03:09:50Z",
          "endTime" : "2018-02-11T03:44:47Z",
          "home" : {
            "shotsOnGoal" : 14,
            "goals" : 2,
            "rinkSide" : "left"
          }
        } ],
        "powerPlayStrength" : "Even",
        "hasShootout" : true,
        "intermissionInfo" : {
          "intermissionTimeRemaining" : 0,
          "intermissionTimeElapsed" : 0,
          "inIntermission" : true
        },
        "powerPlayInfo" : {
          "inSituation" : true,
          "situationTimeElapsed" : 72,
          "situationTimeRemaining" : 0
        },
        "currentPeriodOrdinal" : "3rd",
        "currentPeriodTimeRemaining" : "Final",
        "currentPeriod" : 3,
        "shootoutInfo" : {
          "away" : {
            "scores" : 0,
            "attempts" : 0
          }
        }
      },
      "content" : {
        "link" : "/api/v1/game/2017020851/content"
      },
      "status" : {
        "codedGameState" : "7",
        "abstractGameState" : "Final",
        "detailedState" : "Final",
        "startTimeTBD" : true,
        "statusCode" : "7"
      }
    } ],
    "totalMatches" : 0,
    "matches" : [ { }, { } ],
    "events" : [ { }, { } ]
  } ],
  "totalMatches" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

