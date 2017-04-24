var user_servive = require('../custom_modules/user.js');
var execute = function (request) {
    return {
        text: JSON.stringify(request.result.parameters)
    }

}

exports.execute = execute;