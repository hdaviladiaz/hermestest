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
    var result = action_manager.executeModule(action, request);
    return result;
    // return {
    //     text: JSON.stringify(result)
    // };
}

exports.execute = execute;