var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var action_manager = require("./actions/action_manager.js");
app.set('port', (5000));
app.get('/', function (request, response) {
  response.end('Wellcome to HERMES Assistant API');
});

app.post('/', function (request, response) {
  action_manager.processRequest(request.body, response);
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
