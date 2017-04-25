var userService = require('../custom_modules/user.js');
var userInformation = require('../actions/user-information_action.js');
var searchFlightService = require('../services/searchFlightService.js');

var execute = function (request) {
    var from = request.result.parameters.from || request.customParameters.from;
    var to = request.result.parameters.to || request.customParameters.to;
    var date = "05/10/2017"
    var flightsResult = searchFlightService.searchFlights(from, to, date);
    //  var user = userService.getCurrentUser();
    // if (!user) {
    //     var eventRequest = userInformation.createEventRequest("get-flights",request.result.parameters);
    //     return eventRequest;
    // }
    var text = " I found in LATAM " + flightsResult.trips.length + " flights from " + from + " to " + to + ".";
    for (var i in flightsResult.trips) {
        var trip = flightsResult.trips[i];
        text += " One for " +trip.price  + " in " + trip.date +". ";
    }
    return {
        text: text,
    }
}

exports.execute = execute;