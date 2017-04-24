var chai = require('chai');
var expect = chai.expect;
var searchFlightService = require('../../services/searchFlightService.js');

var expectedFlights;

beforeEach(function() {

  expectedFlights = {
      "airline": "LATAM",
      "from": "UIO",
      "to": "MAD",
      "requestedDate": "2017-05-01",
      "currency": "USD",
      "trips": [{
              "date": "2015-04-29",
              "price": "351"
          },
          {
              "date": "2015-04-30",
              "price": "309"
          },
          {
              "date": "2015-05-01",
              "price": "309"
          },
          {
              "date": "2015-05-02",
              "price": "309"
          },
          {
              "date": "2015-05-03",
              "price": "309"
          },
          {
              "date": "2015-05-05",
              "price": "309"
          },
          {
              "date": "2015-05-07",
              "price": "351"
          }
      ]
  }
});

describe('Flight service searching', function() {
  it('should return the JSON readed from file', function() {
    var destination = 'Guayaquil';
    var departureDate = '22/01/2018';
    var flights = searchFlightService.searchFlights('UIO', destination, departureDate);
    expect(flights).to.deep.equal(expectedFlights);
  });

  it('should change origin city in the JSON response', function() {
    var origin = 'Quito';
    var destination = 'Guayaquil';
    var departureDate = '22/01/2018';
    var flights = searchFlightService.searchFlights(origin, destination, departureDate);
    expectedFlights.from = origin;
    expect([flights]).to.deep.include.members([expectedFlights]);
  });

});
