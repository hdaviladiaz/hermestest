var Flight = require('../model/flight.js');
var _ = require('underscore');
var storedPage = 1;
var storedOrigin, storedDestination, storedDate;
var searchFlights = function (origin, destination, date, page, limit) {
    var result = new Flight(origin, destination, date, page, limit);
    storedPage = page;
    storedDate = date;
    storedDestination = destination;
    storedOrigin = origin;
    return result;
}

var moreFlights = function () {
    var flights = this.searchFlights(storedOrigin, storedDestination, storedDate, storedPage + 1, 2);
    if (flights && flights.trips && flights.trips.length > 0) {
        storedPage = storedPage + 1;
    }
    return flights;
}

var getCheaperFlights = function (numberOfFlights) {
    var flights = this.searchFlights(storedOrigin, storedDestination, storedDate, 1);
    flights.trips = _.sortBy(flights.trips, function (trip) { return trip.price; })
    flights.trips = _.first(flights.trips, numberOfFlights);
    return flights;
}

exports.getCheaperFlights = getCheaperFlights;
exports.moreFlights = moreFlights;
exports.searchFlights = searchFlights;

