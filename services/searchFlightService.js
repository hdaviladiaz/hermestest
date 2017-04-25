
var Flight = require('../model/flight.js');
var moment = require('moment');
var patternFormat = 'YYYY-MM-DD';

var searchFlights = function(origin, destination, date){
    return new Flight(origin, destination, date);
}

exports.searchFlights = searchFlights
