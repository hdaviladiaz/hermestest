var user_service = require('../custom_modules/user.js');
var action_manager = require('../actions/action_manager.js');
var execute = function (request) {
    var action = request.parameters.action;
    var user = {
        name: request.parameters.name,
        lastname: request.parameters.lastname,
        passport: request.parameters.passport,
    }
    user_service.updateCurrentUser(user);
    var result = action_manager.executeModule(action, request)
    return result;
}

exports.execute = execute;