var Flight = require('../model/flight.js');
var FlightRequest = require('../model/flightRequest.js');
var _ = require('underscore');

var storedData = new FlightRequest();
var searchFlights = function (origin, destination, date, page, limit) {
    var result = new Flight(origin, destination, date, page, limit);
    storedData.page = page;
    storedData.date = date;
    storedData.to = destination;
    storedData.from = origin;
    return result;
}

var moreFlights = function () {
    var flights = this.searchFlights(storedData.to, storedData.from, storedData.date, storedData.page + 1, 2);
    if (flights && flights.trips && flights.trips.length > 0) {
        storedData.page = storedData.page + 1;
    }
    return flights;
}

var getCheaperFlights = function (numberOfFlights) {
    var flights = this.searchFlights(storedData.to, storedData.from, storedData.date, 1);
    flights.trips = _.sortBy(flights.trips, function (trip) { return trip.price; })
    flights.trips = _.first(flights.trips, numberOfFlights);
    return flights;
}
var isStoredData = function () {
    return storedData && storedData.hasState();
}

exports.isStoredData = isStoredData;
exports.getCheaperFlights = getCheaperFlights;
exports.moreFlights = moreFlights;
exports.searchFlights = searchFlights;

