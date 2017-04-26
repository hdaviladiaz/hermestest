var _ = require('underscore');
var humanize = require('humanize');
var moment = require('moment');
var searchFlightGestor = require('../gestor/searchFlightGestor.js');
var storedPage = 1;
var storedOrigin, storedDestination, storedDate;
var searchFlights = function (origin, destination, date, page) {
  page = page || storedPage;
  origin = origin || storedOrigin;
  destination = destination || storedDestination;
  date = date || storedDate;
  var flight = searchFlightGestor.searchFlights(origin, destination, date, page, 2);
  var text = "There are no more flights.";
  if (!flight || !flight.trips || flight.trips.length == 0) {
    return text
  }
  text = " I found in LATAM " + flight.pagination.count + " flights for "+humanize.naturalDay(date.unix())+" from " + origin + " to " + destination + ". ";
  _.each(flight.trips, function (trip, index) {
    var date = moment(trip.departure.date, "YYYY-MM-DD");
    text += humanize.ordinal(index + 1) + " for " + trip.price + " " + flight.currency + ".";
    // + humanize.naturalDay(date.unix()) + ". "
  })
  storedPage = page;
  storedDate = date;
  storedDestination = destination;
  storedOrigin = origin;
  return text;
}
var moreFlights = function () {
  storedPage =storedPage+1;
  var flight = searchFlightGestor.searchFlights(storedOrigin, storedDestination, storedDate, storedPage);
  var text = "There are no more flights.";
  if (!flight || !flight.trips || flight.trips.length == 0) {
    storedPage =storedPage-1;
    return text
  }
  text = "";
  _.each(flight.trips, function (trip, index) {
    var date = moment(trip.departure.date, "YYYY-MM-DD");
    text += humanize.ordinal(index + 1 + (storedPage-1) * 2) + " for " + trip.price + " " + flight.currency + ".";
    // + humanize.naturalDay(date.unix()) + ". "
  })
  return text;
}

exports.searchFlights = searchFlights;
exports.moreFlights = moreFlights;