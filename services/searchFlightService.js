
var flights = require('./data/flights-mock.json')

var searchFlights = function(origin, destination, date){
    flights.from = origin;
    return flights;
}

exports.searchFlights = searchFlights
