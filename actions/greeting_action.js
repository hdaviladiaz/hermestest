var user_servive = require('../custom_modules/user.js');
var execute = function (request) {
    var user = user_servive.getCurrentUser();
    if (!user) {
        return {
            event: {
                name: "get-user-information"
            }
        }
    }
    return {
        text: "Hello from the greeting action.",
    }
}

exports.execute = execute;