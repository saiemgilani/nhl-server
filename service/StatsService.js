'use strict';


/**
 * Get all available NHL statistic types.
 *
 * returns StatTypes
 **/
exports.getStatTypes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "displayName" : "byDayOfWeek"
}, {
  "displayName" : "byDayOfWeek"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

