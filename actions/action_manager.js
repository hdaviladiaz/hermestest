var module_action_loader = require("../custom_modules/action_module_loader.js");
var response_builder = require('../custom_modules/response_builder.js');

var processRequest = function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    var module_name = '';
    if (request && request.result && request.result.metadata && request.result.metadata.intentName)
        module_name = request.result.metadata.intentName;
    var result = executeModule(module_name, request, response);
    response.end(JSON.stringify(result));
}
var executeModule = function (module_name, request) {
    var module = module_action_loader.loadActionModule(module_name);
    if (!module || 'function' != typeof module.execute) {
        module = require('../actions/not_found_action.js');
    }
    var options = module.execute(request);
    var result = response_builder.createResponse(options);
    return result;
}

exports.processRequest = processRequest;
exports.executeModule = executeModule;