var userService = require('../custom_modules/user.js');
var userInformation = require('../actions/user-information_action.js');
var execute = function (request) {
    var user = userService.getCurrentUser();
    if (!user) {
        var eventRequest = userInformation.createEventRequest("get-flights");
        return eventRequest;
    }
    var from=request.result.parameters.from;
    var to=request.result.parameters.to;
    return {
        text:  user.name + " I found the following flights from "+from+" to "+to,
    }
}

exports.execute = execute;