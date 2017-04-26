var Flight = require('../model/flight.js');

var searchFlights = function (origin, destination, date, page, limit) {
    var result = new Flight(origin, destination, date,page,limit);
    return result;
}

exports.searchFlights = searchFlights

