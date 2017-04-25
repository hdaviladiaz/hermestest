var moment = require('moment');
var patternFormat = 'YYYY-MM-DD';

function Flight (origin, destination, date) {
  this.airline = 'LATAM';
  this.from = origin || '';
  this.to = destination || '';
  this.requestedDate = date || '';
  this.currency = 'USD';
  this.trips = ramdonFlights(date);
}

var ramdonFlights = function(date){
  var numberTrips = 3;
  var options = [];
  for (var i = 0; i < numberTrips; i++) {
    options.push({
      "date": moment(date, patternFormat).add(i, 'days').format(),
      "price": 500 + i * 50
    })
  }
  return options;
}

module.exports = Flight
