var user_servive = require('../custom_modules/user.js');
var execute = function (request) {
   return{
       text: JSON.stringify(request)
   }
    
}

exports.execute = execute;