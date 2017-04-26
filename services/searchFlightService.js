var _ = require('underscore');
var humanize = require('humanize');
var searchFlightGestor = require('../gestor/searchFlightGestor.js');
var storedPage = 1;
var storedOrigin, storedDestination, storedDate;
var searchFlights = function (origin, destination, date, page) {
  page = page || storedPage;
  origin = origin || storedOrigin;
  destination = destination || storedDestination;
  date = date || storedDate;
  var flight = searchFlightGestor.searchFlights(origin, destination, date);
  var text = "There are no more flights.";
  if (!flight || !flight.trips || flight.trips.length == 0) {
    return text
  }
  text = " I found in LATAM " + flight.pagination.count + " flights from " + origin + " to " + destination + ". ";
  _.each(flight.trips, function (trip, index) {
    text += humanize.ordinal(index + 1) + " for " + trip.price + " " + flight.currency + " on "
      + humanize.naturalDay(trip.departure.date, "MM/DD/YYYY") + ". "
  })
  storedPage = page;
  storedDate = date;
  storedDestination = destination;
  storedOrigin = origin;
  return text;
}
var moreFlights = function () {
  return this.searchFlights(storedOrigin, storedDestination, storedDate, storedPage + 1);
}

exports.searchFlights = searchFlights;
exports.moreFlights = moreFlights;