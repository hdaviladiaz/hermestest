var userService = require('../custom_modules/user.js');
var userInformation = require('../actions/user-information_action.js');
var searchFlightService = require('../services/searchFlightService.js');

var execute=function(request){
var text = searchFlightService.moreFlights();
    return {
        text: text
    }
}

exports.execute=execute;