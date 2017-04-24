
var createResponse = function (options) {
    var result = {
        speech: options.text,
        displayText: options.text,
        data: {},
        contextOut: [],
        source: "",
        followupEvent: {},
        context:{}
    }
    if (options.event) {
        result.followupEvent = {
            name: options.event.name,
            data: options.event.data
        }
    }
    if (options.context) {
        result.context = {
            name: options.context.name,
            parameters: options.context.parameters
        }
    }
    return result;
}
exports.createResponse = createResponse;