var express = require('express');
var app = express();
var routes = require('./routes')(app);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
