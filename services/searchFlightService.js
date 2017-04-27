var _ = require('underscore');
var humanize = require('humanize');
var moment = require('moment');
var searchFlightGestor = require('../gestor/searchFlightGestor.js');

var searchFlights = function (origin, destination, date) {
  var momentDate = moment(date, "YYYY-MM-DD");
  var flight = searchFlightGestor.searchFlights(origin, destination, date, 1, 2);
  var text = "There are no more flights.";
  if (!flight || !flight.trips || flight.trips.length == 0) {
    return text
  }
  text = " I found in LATAM " + flight.pagination.count + " flights for "
    + humanize.naturalDay(momentDate.unix()) + " from " + origin + " to " + destination + ". ";
  _.each(flight.trips, function (trip, index) {
    text += humanize.ordinal(index + 1) + " for " + trip.price + " " + flight.currency + ".";
  })
  return text;
}


var moreFlights = function () {
  var flight = searchFlightGestor.moreFlights();
  var text = "There are no more flights.";
  if (!flight || !flight.trips || flight.trips.length == 0) {
    return text
  }
  text = "";
  _.each(flight.trips, function (trip, index) {
    text += humanize.ordinal(index + 1 + (flight.pagination.page - 1) * 2) + " for " + trip.price + " " + flight.currency + ".";
  })
  return text;
}

var getCheaperFlights = function (numberOfFlights) {
  var flights = searchFlightGestor.getCheaperFlights(numberOfFlights);
  var text = "I have no options saved.";
  if (!flights || !flights.trips || flights.trips.length == 0) {
    return text;
  }
  text = "Based on your requirements, I found the following flights:";
  _.each(flights.trips, function (trip, index) {
    text += humanize.ordinal(index + 1) + " for " + trip.price + " " + flights.currency + ".";
  })
  return text;
}

exports.searchFlights = searchFlights;
exports.moreFlights = moreFlights;
exports.getCheaperFlights = getCheaperFlights;