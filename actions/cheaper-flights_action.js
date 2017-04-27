var userService = require('../custom_modules/user.js');
var userInformation = require('../actions/user-information_action.js');
var searchFlightService = require('../services/searchFlightService.js');

var execute = function (request) {
    var numberOfFlights = request.result.parameters.numberOfFlights || request.customParameters.numberOfFlights || 1;
    var text=searchFlightService.getCheaperFlights(numberOfFlights);
    return {
        text: text
    }
}

exports.execute = execute;