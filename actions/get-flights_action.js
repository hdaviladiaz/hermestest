var userService = require('../custom_modules/user.js');
var userInformation = require('../actions/user-information_action.js');
var execute = function (request) {
    var from = request.result.parameters.from || request.customParameters.from;
    var to = request.result.parameters.to|| request.customParameters.to;
    var user = userService.getCurrentUser();
    // if (!user) {
    //     var eventRequest = userInformation.createEventRequest("get-flights",request.result.parameters);
    //     return eventRequest;
    // }
    return {
        text: " I found the following flights from " + from + " to " + to,
    }
}

exports.execute = execute;