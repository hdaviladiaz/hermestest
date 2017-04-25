var userService = require('../custom_modules/user.js');
var userInformation = require('../actions/user-information_action.js');
var searchFlightService = require('../services/searchFlightService.js');

var execute = function (request) {
    var today = new Date();
    var todayStr = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    var from = request.result.parameters.from || request.customParameters.from;
    var to = request.result.parameters.to || request.customParameters.to;
    var date = request.result.parameters.date || request.customParameters.date || todayStr;
    var text = searchFlightService.searchFlightsToText(from, to, date);
    return {
        text: text
    }
}

exports.execute = execute;
