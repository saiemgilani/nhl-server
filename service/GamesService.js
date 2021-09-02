'use strict';


/**
 * Get all available data for an NHL game.
 * This contains all data related to a game, from the boxscore, to play data and even on-ice coordinates. Be forewarned that, depending on the game, this endpoint can return a **lot** of data.
 *
 * id BigDecimal The ID of the game. The first 4 digits identify the season of the game (ie. 2017 for the 2017-2018 season). The next 2 digits give the type of game, where 01 = preseason, 02 = regular season, 03 = playoffs, 04 = all-star. The final 4 digits identify the specific game number. For regular season and preseason games, this ranges from 0001 to the number of games played. (1271 for seasons with 31 teams (2017 and onwards) and 1230 for seasons with 30 teams). For playoff games, the 2nd digit of the specific number gives the round of the playoffs, the 3rd digit specifies the matchup, and the 4th digit specifies the game (out of 7).
 * returns Game
 **/
exports.getGame = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gamePk" : 2017020851,
  "metaData" : {
    "timeStamp" : "20180211_054345",
    "wait" : 10
  },
  "copyright" : "copyright",
  "link" : "/api/v1/game/2017020851/feed/live",
  "gameData" : {
    "game" : {
      "season" : "20172018",
      "pk" : 2017020851,
      "type" : "R"
    },
    "datetime" : {
      "dateTime" : "2018-02-11T03:00:00Z",
      "endDateTime" : "2018-02-11T05:30:42Z"
    },
    "teams" : {
      "away" : {
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
      }
    },
    "players" : {
      "lastName" : "Thornton",
      "birthStateProvince" : "ON",
      "link" : "/api/v1/people/8466138",
      "rosterStatus" : "I",
      "fullName" : "Joe Thornton",
      "weight" : 220,
      "active" : true,
      "birthCity" : "London",
      "captain" : true,
      "birthDate" : "1979-07-02T00:00:00.000+00:00",
      "rookie" : true,
      "primaryNumber" : "19",
      "firstName" : "Joe",
      "currentAge" : 38,
      "nationality" : "CAN",
      "alternateCaptain" : true,
      "birthCountry" : "CAN",
      "id" : 8466138,
      "height" : "6' 4\"",
      "shootsCatches" : "L"
    },
    "status" : {
      "codedGameState" : "7",
      "abstractGameState" : "Final",
      "detailedState" : "Final",
      "startTimeTBD" : true,
      "statusCode" : "7"
    }
  },
  "liveData" : {
    "plays" : {
      "penaltyPlays" : [ 6.027456183070403, 6.027456183070403 ],
      "scoringPlays" : [ 0.8008281904610115, 0.8008281904610115 ],
      "allPlays" : [ {
        "result" : {
          "eventCode" : "SJS505",
          "eventTypeId" : "GAME_END",
          "description" : "Game End",
          "event" : "Game End"
        },
        "players" : [ {
          "playerType" : "Winner",
          "player" : {
            "link" : "/api/v1/people/8476881",
            "fullName" : "Tomas Hertl",
            "id" : 8476881
          }
        }, {
          "playerType" : "Winner",
          "player" : {
            "link" : "/api/v1/people/8476881",
            "fullName" : "Tomas Hertl",
            "id" : 8476881
          }
        } ],
        "about" : {
          "eventIdx" : 315,
          "dateTime" : "2018-02-11T05:30:42Z",
          "eventId" : 505,
          "period" : 3,
          "periodType" : "REGULAR",
          "ordinalNum" : "3rd",
          "periodTime" : "20:00",
          "periodTimeRemaining" : "00:00",
          "goals" : {
            "away" : 4,
            "home" : 6
          }
        },
        "coordinates" : {
          "x" : 0,
          "y" : 0
        },
        "team" : {
          "name" : "San Jose Sharks",
          "link" : "/api/v1/teams/28",
          "id" : 28,
          "triCode" : "SJS"
        }
      }, {
        "result" : {
          "eventCode" : "SJS505",
          "eventTypeId" : "GAME_END",
          "description" : "Game End",
          "event" : "Game End"
        },
        "players" : [ {
          "playerType" : "Winner",
          "player" : {
            "link" : "/api/v1/people/8476881",
            "fullName" : "Tomas Hertl",
            "id" : 8476881
          }
        }, {
          "playerType" : "Winner",
          "player" : {
            "link" : "/api/v1/people/8476881",
            "fullName" : "Tomas Hertl",
            "id" : 8476881
          }
        } ],
        "about" : {
          "eventIdx" : 315,
          "dateTime" : "2018-02-11T05:30:42Z",
          "eventId" : 505,
          "period" : 3,
          "periodType" : "REGULAR",
          "ordinalNum" : "3rd",
          "periodTime" : "20:00",
          "periodTimeRemaining" : "00:00",
          "goals" : {
            "away" : 4,
            "home" : 6
          }
        },
        "coordinates" : {
          "x" : 0,
          "y" : 0
        },
        "team" : {
          "name" : "San Jose Sharks",
          "link" : "/api/v1/teams/28",
          "id" : 28,
          "triCode" : "SJS"
        }
      } ],
      "playsByPeriod" : [ {
        "startIndex" : 0,
        "plays" : [ 1.4658129805029452, 1.4658129805029452 ],
        "endIndex" : 114
      }, {
        "startIndex" : 0,
        "plays" : [ 1.4658129805029452, 1.4658129805029452 ],
        "endIndex" : 114
      } ]
    },
    "boxscore" : {
      "teams" : {
        "away" : {
          "coaches" : [ {
            "person" : {
              "link" : "/api/v1/people/null",
              "fullName" : "Peter DeBoer"
            },
            "position" : {
              "code" : "HC",
              "name" : "Head Coach",
              "type" : "Head Coach",
              "abbreviation" : "Head Coach"
            }
          }, {
            "person" : {
              "link" : "/api/v1/people/null",
              "fullName" : "Peter DeBoer"
            },
            "position" : {
              "code" : "HC",
              "name" : "Head Coach",
              "type" : "Head Coach",
              "abbreviation" : "Head Coach"
            }
          } ],
          "goalies" : [ 5.962133916683182, 5.962133916683182 ],
          "onIce" : [ 2.3021358869347655, 2.3021358869347655 ],
          "players" : {
            "stats" : {
              "skaterStats" : {
                "penaltyMinutes" : 0,
                "plusMinus" : 1,
                "powerPlayGoals" : 0,
                "faceOffWins" : 0,
                "takeaways" : 0,
                "shortHandedAssists" : 0,
                "hits" : 0,
                "powerPlayAssists" : 0,
                "shortHandedGoals" : 0,
                "blocked" : 0,
                "shortHandedTimeOnIce" : "3:45",
                "timeOnIce" : "23:04",
                "assists" : 0,
                "faceoffTaken" : 0,
                "shots" : 2,
                "evenTimeOnIce" : "18:12",
                "powerPlayTimeOnIce" : "1:07",
                "goals" : 0,
                "giveaways" : 1
              }
            },
            "person" : {
              "link" : "/api/v1/people/8471709",
              "rosterStatus" : "Y",
              "fullName" : "Marc-Edouard Vlasic",
              "id" : 8471709,
              "shootsCatches" : "L"
            },
            "jerseyNumber" : "44",
            "position" : {
              "code" : "D",
              "name" : "Defenseman",
              "type" : "Defenseman",
              "abbreviation" : "D"
            }
          },
          "scratches" : [ 7.061401241503109, 7.061401241503109 ],
          "penaltyBox" : [ 9.301444243932576, 9.301444243932576 ],
          "skaters" : [ 5.637376656633329, 5.637376656633329 ],
          "teamStats" : {
            "teamSkaterStats" : {
              "hits" : 15,
              "powerPlayPercentage" : "0.0",
              "faceOffWinPercentage" : "59.3",
              "blocked" : 21,
              "pim" : 6,
              "powerPlayGoals" : 0,
              "powerPlayOpportunities" : 1,
              "takeaways" : 9,
              "shots" : 30,
              "goals" : 6,
              "giveaways" : 6
            }
          },
          "onIcePlus" : [ {
            "stamina" : 33,
            "shiftDuration" : 458,
            "playerId" : 8477180
          }, {
            "stamina" : 33,
            "shiftDuration" : 458,
            "playerId" : 8477180
          } ]
        }
      },
      "officials" : [ {
        "officialType" : "Linesman",
        "official" : {
          "link" : "/api/v1/people/2071",
          "fullName" : "Tim Peel",
          "id" : 2071
        }
      }, {
        "officialType" : "Linesman",
        "official" : {
          "link" : "/api/v1/people/2071",
          "fullName" : "Tim Peel",
          "id" : 2071
        }
      } ]
    },
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
    "decisions" : {
      "winner" : {
        "link" : "/api/v1/people/8477180",
        "fullName" : "Aaron Dell",
        "id" : 8477180
      }
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the boxscore for an NHL game.
 * If you want detailed play information, you should use `/game/{id}/feed/live` or `/game/{id}/feed/live/diffPatch`.
 *
 * id BigDecimal The ID of the game. The first 4 digits identify the season of the game (ie. 2017 for the 2017-2018 season). The next 2 digits give the type of game, where 01 = preseason, 02 = regular season, 03 = playoffs, 04 = all-star. The final 4 digits identify the specific game number. For regular season and preseason games, this ranges from 0001 to the number of games played. (1271 for seasons with 31 teams (2017 and onwards) and 1230 for seasons with 30 teams). For playoff games, the 2nd digit of the specific number gives the round of the playoffs, the 3rd digit specifies the matchup, and the 4th digit specifies the game (out of 7).
 * returns GameBoxscores
 **/
exports.getGameBoxscore = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get editorials, video replays and photo highlights for an NHL game.
 *
 * id BigDecimal The ID of the game. The first 4 digits identify the season of the game (ie. 2017 for the 2017-2018 season). The next 2 digits give the type of game, where 01 = preseason, 02 = regular season, 03 = playoffs, 04 = all-star. The final 4 digits identify the specific game number. For regular season and preseason games, this ranges from 0001 to the number of games played. (1271 for seasons with 31 teams (2017 and onwards) and 1230 for seasons with 30 teams). For playoff games, the 2nd digit of the specific number gives the round of the playoffs, the 3rd digit specifies the matchup, and the 4th digit specifies the game (out of 7).
 * returns GameContent
 **/
exports.getGameContent = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "editorial" : {
    "preview" : {
      "title" : "Preview",
      "items" : [ {
        "date" : "2000-01-23T04:56:07.000+00:00",
        "preview" : "<p><b>OILERS (23-26-4) at SHARKS (28-18-8)</b></p><p><b>10 p.m. ET; NBCSCA, CITY, SN360, SN, NHL.TV</b></p><p>&nbsp;</p><h5><b>The Game</b></h5><p>Backup goaltender <span class=\"token token-playerCard\" id=\"token-B36CCB71E81996298E792\">Aaron Dell</span> will make his 19th start of the season when the San Jose Sharks play the Edmonton Oilers at SAP Center on Saturday in the first of back-to-back games.</p>",
        "tokenData" : {
          "teamId" : "28",
          "name" : "Marc-Edouard Vlasic",
          "tokenGUID" : "token-EBDA2F0039BF4445D2C91",
          "id" : "8471709",
          "href" : "https://www.nhl.com/player/keegan-lowe-8476397?season=20172018",
          "type" : "hyperLink",
          "hrefMobile" : "https://www.nhl.com/player/keegan-lowe-8476397?season=20172018",
          "seoName" : "marc-edouard-vlasic"
        },
        "seoDescription" : "Backup goaltender Aaron Dell will make his 19th start of the season when the San Jose Sharks play the Edmonton Oilers at SAP Center on Saturday in the first of back-to-back games.",
        "approval" : "approval",
        "dataURI" : "/nhl/id/v1/295823824/details/web-v1.json",
        "subhead" : "Backups Montoya, Dell to start for Edmonton, San Jose",
        "media" : {
          "image" : {
            "altText" : "altText",
            "title" : "title",
            "cuts" : {
              "at2x" : "https://nhl.bamcontent.com/images/photos/295824704/2568x1444/cut.jpg",
              "src" : "https://nhl.bamcontent.com/images/photos/295824704/2568x1444/cut.jpg",
              "at3x" : "https://nhl.bamcontent.com/images/photos/295824704/2568x1444/cut.jpg",
              "width" : 2568,
              "aspectRatio" : "16:9",
              "height" : 1444
            }
          },
          "type" : "photo"
        },
        "type" : "article",
        "seoTitle" : "Edmonton Oilers San Jose Sharks game preview",
        "seoKeywords" : "Game preview, Edmonton Oilers, San Jose Sharks, Aaron Dell, Al Montoya, Feb 10",
        "keywordsDisplay" : [ {
          "displayName" : "English",
          "type" : "bodyParagraphCount",
          "value" : "en"
        }, {
          "displayName" : "English",
          "type" : "bodyParagraphCount",
          "value" : "en"
        } ],
        "url" : "/news/edmonton-oilers-san-jose-sharks-game-preview/c-295823824?game_pk=2017020851",
        "keywordsAll" : [ null, null ],
        "contributor" : {
          "contributors" : [ {
            "twitter" : "twitter",
            "name" : "Eric Gilmore"
          }, {
            "twitter" : "twitter",
            "name" : "Eric Gilmore"
          } ],
          "source" : "NHL.com Correspondent"
        },
        "tagline" : "tagline",
        "state" : "A",
        "id" : "295823824",
        "commenting" : true,
        "headline" : "Oilers at Sharks preview",
        "slug" : "edmonton-oilers-san-jose-sharks-game-preview"
      }, {
        "date" : "2000-01-23T04:56:07.000+00:00",
        "preview" : "<p><b>OILERS (23-26-4) at SHARKS (28-18-8)</b></p><p><b>10 p.m. ET; NBCSCA, CITY, SN360, SN, NHL.TV</b></p><p>&nbsp;</p><h5><b>The Game</b></h5><p>Backup goaltender <span class=\"token token-playerCard\" id=\"token-B36CCB71E81996298E792\">Aaron Dell</span> will make his 19th start of the season when the San Jose Sharks play the Edmonton Oilers at SAP Center on Saturday in the first of back-to-back games.</p>",
        "tokenData" : {
          "teamId" : "28",
          "name" : "Marc-Edouard Vlasic",
          "tokenGUID" : "token-EBDA2F0039BF4445D2C91",
          "id" : "8471709",
          "href" : "https://www.nhl.com/player/keegan-lowe-8476397?season=20172018",
          "type" : "hyperLink",
          "hrefMobile" : "https://www.nhl.com/player/keegan-lowe-8476397?season=20172018",
          "seoName" : "marc-edouard-vlasic"
        },
        "seoDescription" : "Backup goaltender Aaron Dell will make his 19th start of the season when the San Jose Sharks play the Edmonton Oilers at SAP Center on Saturday in the first of back-to-back games.",
        "approval" : "approval",
        "dataURI" : "/nhl/id/v1/295823824/details/web-v1.json",
        "subhead" : "Backups Montoya, Dell to start for Edmonton, San Jose",
        "media" : {
          "image" : {
            "altText" : "altText",
            "title" : "title",
            "cuts" : {
              "at2x" : "https://nhl.bamcontent.com/images/photos/295824704/2568x1444/cut.jpg",
              "src" : "https://nhl.bamcontent.com/images/photos/295824704/2568x1444/cut.jpg",
              "at3x" : "https://nhl.bamcontent.com/images/photos/295824704/2568x1444/cut.jpg",
              "width" : 2568,
              "aspectRatio" : "16:9",
              "height" : 1444
            }
          },
          "type" : "photo"
        },
        "type" : "article",
        "seoTitle" : "Edmonton Oilers San Jose Sharks game preview",
        "seoKeywords" : "Game preview, Edmonton Oilers, San Jose Sharks, Aaron Dell, Al Montoya, Feb 10",
        "keywordsDisplay" : [ {
          "displayName" : "English",
          "type" : "bodyParagraphCount",
          "value" : "en"
        }, {
          "displayName" : "English",
          "type" : "bodyParagraphCount",
          "value" : "en"
        } ],
        "url" : "/news/edmonton-oilers-san-jose-sharks-game-preview/c-295823824?game_pk=2017020851",
        "keywordsAll" : [ null, null ],
        "contributor" : {
          "contributors" : [ {
            "twitter" : "twitter",
            "name" : "Eric Gilmore"
          }, {
            "twitter" : "twitter",
            "name" : "Eric Gilmore"
          } ],
          "source" : "NHL.com Correspondent"
        },
        "tagline" : "tagline",
        "state" : "A",
        "id" : "295823824",
        "commenting" : true,
        "headline" : "Oilers at Sharks preview",
        "slug" : "edmonton-oilers-san-jose-sharks-game-preview"
      } ],
      "topicList" : "topicList"
    }
  },
  "copyright" : "copyright",
  "highlights" : {
    "scoreboard" : {
      "scoreboard" : {
        "title" : "Highlights",
        "items" : [ null, null ],
        "topicList" : "293642378"
      }
    }
  },
  "link" : "/api/v1/game/2017020851/content",
  "media" : {
    "milestones" : {
      "streamStart" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Milestones",
      "items" : [ {
        "highlight" : {
          "date" : "2000-01-23T04:56:07.000+00:00",
          "playbacks" : [ {
            "name" : "FLASH_192K_320X180",
            "width" : "960",
            "url" : "http://md-akc.med.nhl.com/mp4/nhl/2018/02/11/ddec1fcc-3772-4769-a547-314de76c6c11/1518322152840/asset_1800k.mp4",
            "height" : "540"
          }, {
            "name" : "FLASH_192K_320X180",
            "width" : "960",
            "url" : "http://md-akc.med.nhl.com/mp4/nhl/2018/02/11/ddec1fcc-3772-4769-a547-314de76c6c11/1518322152840/asset_1800k.mp4",
            "height" : "540"
          } ],
          "keywords" : [ null, null ],
          "description" : "Barclay Goodrow takes a drop pass from Jannik Hansen and whips a quick wrist shot past Al Montoya to give the Sharks a 3-0 lead in the 2nd",
          "type" : "video",
          "title" : "Goodrow buries Hansen's pass",
          "blurb" : "EDM@SJS: Goodrow snaps Hansen's pass by Montoya",
          "mediaPlaybackId" : "57602103",
          "authFlow" : true,
          "duration" : "00:51",
          "id" : "57602103",
          "mediaState" : "MEDIA_ARCHIVE"
        },
        "period" : "1",
        "periodTime" : "01:15",
        "ordinalNum" : "1st",
        "teamId" : "28",
        "timeAbsolute" : "2000-01-23T04:56:07.000+00:00",
        "description" : "Broadcast Start",
        "timeOffset" : "4",
        "title" : "Broadcast Start",
        "type" : "BROADCAST_START",
        "statsEventId" : "10",
        "playerId" : "8477046"
      }, {
        "highlight" : {
          "date" : "2000-01-23T04:56:07.000+00:00",
          "playbacks" : [ {
            "name" : "FLASH_192K_320X180",
            "width" : "960",
            "url" : "http://md-akc.med.nhl.com/mp4/nhl/2018/02/11/ddec1fcc-3772-4769-a547-314de76c6c11/1518322152840/asset_1800k.mp4",
            "height" : "540"
          }, {
            "name" : "FLASH_192K_320X180",
            "width" : "960",
            "url" : "http://md-akc.med.nhl.com/mp4/nhl/2018/02/11/ddec1fcc-3772-4769-a547-314de76c6c11/1518322152840/asset_1800k.mp4",
            "height" : "540"
          } ],
          "keywords" : [ null, null ],
          "description" : "Barclay Goodrow takes a drop pass from Jannik Hansen and whips a quick wrist shot past Al Montoya to give the Sharks a 3-0 lead in the 2nd",
          "type" : "video",
          "title" : "Goodrow buries Hansen's pass",
          "blurb" : "EDM@SJS: Goodrow snaps Hansen's pass by Montoya",
          "mediaPlaybackId" : "57602103",
          "authFlow" : true,
          "duration" : "00:51",
          "id" : "57602103",
          "mediaState" : "MEDIA_ARCHIVE"
        },
        "period" : "1",
        "periodTime" : "01:15",
        "ordinalNum" : "1st",
        "teamId" : "28",
        "timeAbsolute" : "2000-01-23T04:56:07.000+00:00",
        "description" : "Broadcast Start",
        "timeOffset" : "4",
        "title" : "Broadcast Start",
        "type" : "BROADCAST_START",
        "statsEventId" : "10",
        "playerId" : "8477046"
      } ]
    },
    "epg" : [ "", "" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all available data for an NHL game after a specific time.
 * You can use this to return a small subset of data relating to game.
 *
 * id BigDecimal The ID of the game. The first 4 digits identify the season of the game (ie. 2017 for the 2017-2018 season). The next 2 digits give the type of game, where 01 = preseason, 02 = regular season, 03 = playoffs, 04 = all-star. The final 4 digits identify the specific game number. For regular season and preseason games, this ranges from 0001 to the number of games played. (1271 for seasons with 31 teams (2017 and onwards) and 1230 for seasons with 30 teams). For playoff games, the 2nd digit of the specific number gives the round of the playoffs, the 3rd digit specifies the matchup, and the 4th digit specifies the game (out of 7).
 * startTimeCode String The prospect ID.
 * returns Game
 **/
exports.getGameDiff = function(id,startTimeCode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gamePk" : 2017020851,
  "metaData" : {
    "timeStamp" : "20180211_054345",
    "wait" : 10
  },
  "copyright" : "copyright",
  "link" : "/api/v1/game/2017020851/feed/live",
  "gameData" : {
    "game" : {
      "season" : "20172018",
      "pk" : 2017020851,
      "type" : "R"
    },
    "datetime" : {
      "dateTime" : "2018-02-11T03:00:00Z",
      "endDateTime" : "2018-02-11T05:30:42Z"
    },
    "teams" : {
      "away" : {
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
      }
    },
    "players" : {
      "lastName" : "Thornton",
      "birthStateProvince" : "ON",
      "link" : "/api/v1/people/8466138",
      "rosterStatus" : "I",
      "fullName" : "Joe Thornton",
      "weight" : 220,
      "active" : true,
      "birthCity" : "London",
      "captain" : true,
      "birthDate" : "1979-07-02T00:00:00.000+00:00",
      "rookie" : true,
      "primaryNumber" : "19",
      "firstName" : "Joe",
      "currentAge" : 38,
      "nationality" : "CAN",
      "alternateCaptain" : true,
      "birthCountry" : "CAN",
      "id" : 8466138,
      "height" : "6' 4\"",
      "shootsCatches" : "L"
    },
    "status" : {
      "codedGameState" : "7",
      "abstractGameState" : "Final",
      "detailedState" : "Final",
      "startTimeTBD" : true,
      "statusCode" : "7"
    }
  },
  "liveData" : {
    "plays" : {
      "penaltyPlays" : [ 6.027456183070403, 6.027456183070403 ],
      "scoringPlays" : [ 0.8008281904610115, 0.8008281904610115 ],
      "allPlays" : [ {
        "result" : {
          "eventCode" : "SJS505",
          "eventTypeId" : "GAME_END",
          "description" : "Game End",
          "event" : "Game End"
        },
        "players" : [ {
          "playerType" : "Winner",
          "player" : {
            "link" : "/api/v1/people/8476881",
            "fullName" : "Tomas Hertl",
            "id" : 8476881
          }
        }, {
          "playerType" : "Winner",
          "player" : {
            "link" : "/api/v1/people/8476881",
            "fullName" : "Tomas Hertl",
            "id" : 8476881
          }
        } ],
        "about" : {
          "eventIdx" : 315,
          "dateTime" : "2018-02-11T05:30:42Z",
          "eventId" : 505,
          "period" : 3,
          "periodType" : "REGULAR",
          "ordinalNum" : "3rd",
          "periodTime" : "20:00",
          "periodTimeRemaining" : "00:00",
          "goals" : {
            "away" : 4,
            "home" : 6
          }
        },
        "coordinates" : {
          "x" : 0,
          "y" : 0
        },
        "team" : {
          "name" : "San Jose Sharks",
          "link" : "/api/v1/teams/28",
          "id" : 28,
          "triCode" : "SJS"
        }
      }, {
        "result" : {
          "eventCode" : "SJS505",
          "eventTypeId" : "GAME_END",
          "description" : "Game End",
          "event" : "Game End"
        },
        "players" : [ {
          "playerType" : "Winner",
          "player" : {
            "link" : "/api/v1/people/8476881",
            "fullName" : "Tomas Hertl",
            "id" : 8476881
          }
        }, {
          "playerType" : "Winner",
          "player" : {
            "link" : "/api/v1/people/8476881",
            "fullName" : "Tomas Hertl",
            "id" : 8476881
          }
        } ],
        "about" : {
          "eventIdx" : 315,
          "dateTime" : "2018-02-11T05:30:42Z",
          "eventId" : 505,
          "period" : 3,
          "periodType" : "REGULAR",
          "ordinalNum" : "3rd",
          "periodTime" : "20:00",
          "periodTimeRemaining" : "00:00",
          "goals" : {
            "away" : 4,
            "home" : 6
          }
        },
        "coordinates" : {
          "x" : 0,
          "y" : 0
        },
        "team" : {
          "name" : "San Jose Sharks",
          "link" : "/api/v1/teams/28",
          "id" : 28,
          "triCode" : "SJS"
        }
      } ],
      "playsByPeriod" : [ {
        "startIndex" : 0,
        "plays" : [ 1.4658129805029452, 1.4658129805029452 ],
        "endIndex" : 114
      }, {
        "startIndex" : 0,
        "plays" : [ 1.4658129805029452, 1.4658129805029452 ],
        "endIndex" : 114
      } ]
    },
    "boxscore" : {
      "teams" : {
        "away" : {
          "coaches" : [ {
            "person" : {
              "link" : "/api/v1/people/null",
              "fullName" : "Peter DeBoer"
            },
            "position" : {
              "code" : "HC",
              "name" : "Head Coach",
              "type" : "Head Coach",
              "abbreviation" : "Head Coach"
            }
          }, {
            "person" : {
              "link" : "/api/v1/people/null",
              "fullName" : "Peter DeBoer"
            },
            "position" : {
              "code" : "HC",
              "name" : "Head Coach",
              "type" : "Head Coach",
              "abbreviation" : "Head Coach"
            }
          } ],
          "goalies" : [ 5.962133916683182, 5.962133916683182 ],
          "onIce" : [ 2.3021358869347655, 2.3021358869347655 ],
          "players" : {
            "stats" : {
              "skaterStats" : {
                "penaltyMinutes" : 0,
                "plusMinus" : 1,
                "powerPlayGoals" : 0,
                "faceOffWins" : 0,
                "takeaways" : 0,
                "shortHandedAssists" : 0,
                "hits" : 0,
                "powerPlayAssists" : 0,
                "shortHandedGoals" : 0,
                "blocked" : 0,
                "shortHandedTimeOnIce" : "3:45",
                "timeOnIce" : "23:04",
                "assists" : 0,
                "faceoffTaken" : 0,
                "shots" : 2,
                "evenTimeOnIce" : "18:12",
                "powerPlayTimeOnIce" : "1:07",
                "goals" : 0,
                "giveaways" : 1
              }
            },
            "person" : {
              "link" : "/api/v1/people/8471709",
              "rosterStatus" : "Y",
              "fullName" : "Marc-Edouard Vlasic",
              "id" : 8471709,
              "shootsCatches" : "L"
            },
            "jerseyNumber" : "44",
            "position" : {
              "code" : "D",
              "name" : "Defenseman",
              "type" : "Defenseman",
              "abbreviation" : "D"
            }
          },
          "scratches" : [ 7.061401241503109, 7.061401241503109 ],
          "penaltyBox" : [ 9.301444243932576, 9.301444243932576 ],
          "skaters" : [ 5.637376656633329, 5.637376656633329 ],
          "teamStats" : {
            "teamSkaterStats" : {
              "hits" : 15,
              "powerPlayPercentage" : "0.0",
              "faceOffWinPercentage" : "59.3",
              "blocked" : 21,
              "pim" : 6,
              "powerPlayGoals" : 0,
              "powerPlayOpportunities" : 1,
              "takeaways" : 9,
              "shots" : 30,
              "goals" : 6,
              "giveaways" : 6
            }
          },
          "onIcePlus" : [ {
            "stamina" : 33,
            "shiftDuration" : 458,
            "playerId" : 8477180
          }, {
            "stamina" : 33,
            "shiftDuration" : 458,
            "playerId" : 8477180
          } ]
        }
      },
      "officials" : [ {
        "officialType" : "Linesman",
        "official" : {
          "link" : "/api/v1/people/2071",
          "fullName" : "Tim Peel",
          "id" : 2071
        }
      }, {
        "officialType" : "Linesman",
        "official" : {
          "link" : "/api/v1/people/2071",
          "fullName" : "Tim Peel",
          "id" : 2071
        }
      } ]
    },
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
    "decisions" : {
      "winner" : {
        "link" : "/api/v1/people/8477180",
        "fullName" : "Aaron Dell",
        "id" : 8477180
      }
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

