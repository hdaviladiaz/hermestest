var Flight = require('../model/flight.js');
var moment = require('moment');
var _ = require('underscore');
var humanize = require('humanize');

var searchFlights = function(origin, destination, date){
    return new Flight(origin, destination, date);
}

var searchFlightsToText = function (origin, destination, date){
    var flight = searchFlights(origin, destination, date);
    var text;
    if(!flight){
      return text
    }
    text = " I found in LATAM " + flight.trips.length + " flights from " + origin + " to " + destination + ". ";
    _.each(flight.trips, function (trip, index) {
      text += humanize.ordinal(index + 1) + " for " + trip.price + " " +  flight.currency + " in " + trip.date +". "
    })
    return text;
}

exports.searchFlights = searchFlights
exports.searchFlightsToText = searchFlightsToText
