var user_service = require('../custom_modules/user.js');
var action_manager = require('../actions/action_manager.js');
var execute = function (request) {
    var action = request.result.parameters.action;
    var user = {
        name: request.result.parameters.name,
        lastname: request.result.parameters.lastname,
        passport: request.result.parameters.passport,
    }
    user_service.updateCurrentUser(user);
    if (request.result.parameters.parameters) {
        var parameters = JSON.parse(request.result.parameters.parameters);
        request.customParameters = parameters;
    }
    var result = action_manager.executeModule(action, request);
    return result;
}

var createEventRequest = function (actionName, parameters) {
    return {
        event: {
            name: "get-user-information",
            data: { "action": actionName, "parameters": JSON.stringify(parameters) }
        }
    }
}

exports.execute = execute;
exports.createEventRequest = createEventRequest;