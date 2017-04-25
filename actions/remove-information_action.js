var userService = require('../custom_modules/user.js');
var userInformation = require('../actions/user-information_action.js');
var execute = function (request) {
    var informationFields = request.result.parameters.informationFields;
    var user = userService.getCurrentUser();
    if (user) {
        for (var i in informationFields) {
            var field = informationFields[i];
            user[field] = null;
        }
    }
    var eventRequest = userInformation.createEventRequest("");
    return eventRequest;
}

exports.execute = execute;