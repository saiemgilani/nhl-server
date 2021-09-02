'use strict';


/**
 * Get an NHL player.
 *
 * id BigDecimal The ID of the player.
 * returns Players
 **/
exports.getPlayer = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "teams" : [ {
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
  }, {
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
 * Get specific statistics for an NHL player.
 *
 * id BigDecimal The ID of the player.
 * stats String Stats explanations:   * `homeAndAway` - Provides a split between home and away games.   * `byMonth` - Monthly split of stats.   * `byDayOfWeek` - Split done by day of the week.   * `goalsByGameSituation` - Shows number on when goals for a player happened like how many in the shootout, how many in each period, etc.   * `onPaceRegularSeason` - This only works with the current in-progress season and shows projected totals based on current onPaceRegularSeason.   * `regularSeasonStatRankings` - Returns where someone stands vs the rest of the league for a specific regularSeasonStatRankings   * `statsSingleSeason` - Obtains single season statistics for a player.   * `vsConference` - Conference stats split.   * `vsDivision` - Division stats split.   * `vsTeam` - Conference stats split.   * `winLoss` - Very similar to the previous modifier except it provides the W/L/OT split instead of Home and Away. 
 * season BigDecimal Return a team's specific season. (optional)
 * returns PlayerStats
 **/
exports.getPlayerStats = function(id,stats,season) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "copyright" : "copyright",
  "stats" : [ {
    "splits" : [ {
      "stat" : {
        "goalsTrailingByOne" : 2,
        "powerPlayTimeOnIcePerGame" : "03:35",
        "points" : 36,
        "timeOnIcePerGame" : "18:20",
        "overTimeGoals" : 0,
        "shortHandedTimeOnIce" : "00:55",
        "timeOnIce" : "862:13",
        "pim" : 38,
        "games" : 47,
        "faceOffPct" : 52.04,
        "shifts" : 1077,
        "rankShotPct" : "246th",
        "rankShortHandedGoals" : "133rd",
        "powerPlayTimeOnIce" : 0.8008281904610115,
        "gameWinningGoals" : 1,
        "goalsLeadingByOne" : 2,
        "goals" : 13,
        "rankGoals" : "13th",
        "plusMinus" : -9,
        "goalsInFirstPeriod" : 6,
        "rankOvertimeGoals" : "9th",
        "goalsTrailingByTwo" : 1,
        "shotPct" : 17.3,
        "rankHits" : "19th",
        "goalsInThirdPeriod" : 4,
        "goalsTrailingByThreePlus" : 1,
        "shortHandedGoals" : 0,
        "shortHandedTimeOnIcePerGame" : "00:01",
        "rankPenaltyMinutes" : "111th",
        "goalsWhenTied" : 4,
        "rankAssists" : "51st",
        "shortHandedPoints" : 0,
        "shots" : 75,
        "rankPowerPlayGoals" : "1st",
        "rankGamesPlayed" : "1st",
        "rankPoints" : "20th",
        "penaltyMinutes" : 38,
        "rankPlusMinus" : "176th",
        "blocked" : 18,
        "assists" : "23",
        "goalsInSecondPeriod" : 3,
        "powerPlayPoints" : 18,
        "rankBlockedShots" : "405th",
        "powerPlayGoals" : 7,
        "hits" : 32,
        "evenTimeOnIcePerGame" : "14:44",
        "goalsLeadingByTwo" : 3,
        "evenTimeOnIce" : 6.027456183070403,
        "rankShots" : "2nd"
      },
      "opponentConference" : {
        "name" : "Western",
        "link" : "/api/v1/conferences/5",
        "id" : 5
      },
      "dayOfWeek" : 1,
      "month" : 1,
      "opponent" : {
        "name" : "New Jersey Devils",
        "link" : "/api/v1/teams/1",
        "id" : 1
      },
      "opponentDivision" : {
        "name" : "Central",
        "link" : "/api/v1/divisions/16",
        "id" : 16
      },
      "season" : "20172018",
      "isHome" : true,
      "isOT" : true,
      "isWin" : true
    }, {
      "stat" : {
        "goalsTrailingByOne" : 2,
        "powerPlayTimeOnIcePerGame" : "03:35",
        "points" : 36,
        "timeOnIcePerGame" : "18:20",
        "overTimeGoals" : 0,
        "shortHandedTimeOnIce" : "00:55",
        "timeOnIce" : "862:13",
        "pim" : 38,
        "games" : 47,
        "faceOffPct" : 52.04,
        "shifts" : 1077,
        "rankShotPct" : "246th",
        "rankShortHandedGoals" : "133rd",
        "powerPlayTimeOnIce" : 0.8008281904610115,
        "gameWinningGoals" : 1,
        "goalsLeadingByOne" : 2,
        "goals" : 13,
        "rankGoals" : "13th",
        "plusMinus" : -9,
        "goalsInFirstPeriod" : 6,
        "rankOvertimeGoals" : "9th",
        "goalsTrailingByTwo" : 1,
        "shotPct" : 17.3,
        "rankHits" : "19th",
        "goalsInThirdPeriod" : 4,
        "goalsTrailingByThreePlus" : 1,
        "shortHandedGoals" : 0,
        "shortHandedTimeOnIcePerGame" : "00:01",
        "rankPenaltyMinutes" : "111th",
        "goalsWhenTied" : 4,
        "rankAssists" : "51st",
        "shortHandedPoints" : 0,
        "shots" : 75,
        "rankPowerPlayGoals" : "1st",
        "rankGamesPlayed" : "1st",
        "rankPoints" : "20th",
        "penaltyMinutes" : 38,
        "rankPlusMinus" : "176th",
        "blocked" : 18,
        "assists" : "23",
        "goalsInSecondPeriod" : 3,
        "powerPlayPoints" : 18,
        "rankBlockedShots" : "405th",
        "powerPlayGoals" : 7,
        "hits" : 32,
        "evenTimeOnIcePerGame" : "14:44",
        "goalsLeadingByTwo" : 3,
        "evenTimeOnIce" : 6.027456183070403,
        "rankShots" : "2nd"
      },
      "opponentConference" : {
        "name" : "Western",
        "link" : "/api/v1/conferences/5",
        "id" : 5
      },
      "dayOfWeek" : 1,
      "month" : 1,
      "opponent" : {
        "name" : "New Jersey Devils",
        "link" : "/api/v1/teams/1",
        "id" : 1
      },
      "opponentDivision" : {
        "name" : "Central",
        "link" : "/api/v1/divisions/16",
        "id" : 16
      },
      "season" : "20172018",
      "isHome" : true,
      "isOT" : true,
      "isWin" : true
    } ],
    "type" : {
      "displayName" : "byDayOfWeek"
    }
  }, {
    "splits" : [ {
      "stat" : {
        "goalsTrailingByOne" : 2,
        "powerPlayTimeOnIcePerGame" : "03:35",
        "points" : 36,
        "timeOnIcePerGame" : "18:20",
        "overTimeGoals" : 0,
        "shortHandedTimeOnIce" : "00:55",
        "timeOnIce" : "862:13",
        "pim" : 38,
        "games" : 47,
        "faceOffPct" : 52.04,
        "shifts" : 1077,
        "rankShotPct" : "246th",
        "rankShortHandedGoals" : "133rd",
        "powerPlayTimeOnIce" : 0.8008281904610115,
        "gameWinningGoals" : 1,
        "goalsLeadingByOne" : 2,
        "goals" : 13,
        "rankGoals" : "13th",
        "plusMinus" : -9,
        "goalsInFirstPeriod" : 6,
        "rankOvertimeGoals" : "9th",
        "goalsTrailingByTwo" : 1,
        "shotPct" : 17.3,
        "rankHits" : "19th",
        "goalsInThirdPeriod" : 4,
        "goalsTrailingByThreePlus" : 1,
        "shortHandedGoals" : 0,
        "shortHandedTimeOnIcePerGame" : "00:01",
        "rankPenaltyMinutes" : "111th",
        "goalsWhenTied" : 4,
        "rankAssists" : "51st",
        "shortHandedPoints" : 0,
        "shots" : 75,
        "rankPowerPlayGoals" : "1st",
        "rankGamesPlayed" : "1st",
        "rankPoints" : "20th",
        "penaltyMinutes" : 38,
        "rankPlusMinus" : "176th",
        "blocked" : 18,
        "assists" : "23",
        "goalsInSecondPeriod" : 3,
        "powerPlayPoints" : 18,
        "rankBlockedShots" : "405th",
        "powerPlayGoals" : 7,
        "hits" : 32,
        "evenTimeOnIcePerGame" : "14:44",
        "goalsLeadingByTwo" : 3,
        "evenTimeOnIce" : 6.027456183070403,
        "rankShots" : "2nd"
      },
      "opponentConference" : {
        "name" : "Western",
        "link" : "/api/v1/conferences/5",
        "id" : 5
      },
      "dayOfWeek" : 1,
      "month" : 1,
      "opponent" : {
        "name" : "New Jersey Devils",
        "link" : "/api/v1/teams/1",
        "id" : 1
      },
      "opponentDivision" : {
        "name" : "Central",
        "link" : "/api/v1/divisions/16",
        "id" : 16
      },
      "season" : "20172018",
      "isHome" : true,
      "isOT" : true,
      "isWin" : true
    }, {
      "stat" : {
        "goalsTrailingByOne" : 2,
        "powerPlayTimeOnIcePerGame" : "03:35",
        "points" : 36,
        "timeOnIcePerGame" : "18:20",
        "overTimeGoals" : 0,
        "shortHandedTimeOnIce" : "00:55",
        "timeOnIce" : "862:13",
        "pim" : 38,
        "games" : 47,
        "faceOffPct" : 52.04,
        "shifts" : 1077,
        "rankShotPct" : "246th",
        "rankShortHandedGoals" : "133rd",
        "powerPlayTimeOnIce" : 0.8008281904610115,
        "gameWinningGoals" : 1,
        "goalsLeadingByOne" : 2,
        "goals" : 13,
        "rankGoals" : "13th",
        "plusMinus" : -9,
        "goalsInFirstPeriod" : 6,
        "rankOvertimeGoals" : "9th",
        "goalsTrailingByTwo" : 1,
        "shotPct" : 17.3,
        "rankHits" : "19th",
        "goalsInThirdPeriod" : 4,
        "goalsTrailingByThreePlus" : 1,
        "shortHandedGoals" : 0,
        "shortHandedTimeOnIcePerGame" : "00:01",
        "rankPenaltyMinutes" : "111th",
        "goalsWhenTied" : 4,
        "rankAssists" : "51st",
        "shortHandedPoints" : 0,
        "shots" : 75,
        "rankPowerPlayGoals" : "1st",
        "rankGamesPlayed" : "1st",
        "rankPoints" : "20th",
        "penaltyMinutes" : 38,
        "rankPlusMinus" : "176th",
        "blocked" : 18,
        "assists" : "23",
        "goalsInSecondPeriod" : 3,
        "powerPlayPoints" : 18,
        "rankBlockedShots" : "405th",
        "powerPlayGoals" : 7,
        "hits" : 32,
        "evenTimeOnIcePerGame" : "14:44",
        "goalsLeadingByTwo" : 3,
        "evenTimeOnIce" : 6.027456183070403,
        "rankShots" : "2nd"
      },
      "opponentConference" : {
        "name" : "Western",
        "link" : "/api/v1/conferences/5",
        "id" : 5
      },
      "dayOfWeek" : 1,
      "month" : 1,
      "opponent" : {
        "name" : "New Jersey Devils",
        "link" : "/api/v1/teams/1",
        "id" : 1
      },
      "opponentDivision" : {
        "name" : "Central",
        "link" : "/api/v1/divisions/16",
        "id" : 16
      },
      "season" : "20172018",
      "isHome" : true,
      "isOT" : true,
      "isWin" : true
    } ],
    "type" : {
      "displayName" : "byDayOfWeek"
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

