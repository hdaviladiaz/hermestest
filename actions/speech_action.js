var user_service = require('../custom_modules/user.js');
var action_manager = require('../actions/action_manager.js');
var execute = function (request) {
    return {
        text: request.parameters || request.customParameter || "Ok"
    }
}


exports.execute = execute;
