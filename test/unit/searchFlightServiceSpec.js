var chai = require('chai');
var expect = chai.expect;
var moment = require('moment');
var patternFormat = 'YYYY-MM-DD';
var searchFlightService = require('../../services/searchFlightService.js');
var Flight = require('../../model/flight.js');

var defaultOrigin = 'UIO';
var defaultDestination = 'MAD';
var defaultDepartureDate = moment('2017-01-05',patternFormat).calendar();
var expectedOrigin = 'Quito';
var expectedDestination = 'Guayaquil';
var expectedDepartureDate = moment('2018-01-22',patternFormat).calendar();
var expectedFlights;

beforeEach(function() {
  expectedFlights = new Flight(defaultOrigin, defaultDestination, defaultDepartureDate);
});

describe('Flight service searching', function() {
  it('should change origin city in the JSON response', function() {
    var flights = searchFlightService.searchFlights(expectedOrigin, defaultDestination, defaultDepartureDate);
    expectedFlights.from = expectedOrigin;
    expect(flights.from).to.equal(expectedFlights.from);
  });

  it('should change destiny city in the JSON response', function() {
    var flights = searchFlightService.searchFlights(defaultOrigin, expectedDestination, defaultDepartureDate);
    expectedFlights.to = expectedDestination;
    expect(flights.to).to.equal(expectedFlights.to);
  });

  it('should change requested date in the JSON response', function() {
    var flights = searchFlightService.searchFlights(defaultOrigin, defaultDestination, expectedDepartureDate);
    expectedFlights.requestedDate = expectedDepartureDate;
    expect(flights.requestedDate).to.equal(expectedFlights.requestedDate);
  });

  it('should change dates of the trips with near suggested dates in the JSON response', function() {
    var flights = searchFlightService.searchFlights(defaultOrigin, defaultDestination, expectedDepartureDate);
    expectedFlights.trips = expectedFlights.trips.map(function(x, index){
      x.date = moment(expectedDepartureDate, 'MM/DD/YYYY').add(index, 'days').calendar();
      return x;
    });
    expect(expectedFlights.trips).to.deep.equal(flights.trips);
  });

});
