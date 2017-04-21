// var express = require('express');
// var app = express();

// app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function (request, response) {
//   response.render('pages/index');
// });

// app.post('/', function (request, response) {

// })

// app.listen(app.get('port'), function () {
//   console.log('Node app is running on port', app.get('port'));
// });
'use strict';

process.env.DEBUG = 'actions-on-google:*';
const Assistant = require('actions-on-google').ApiAiAssistant;

// [START YourAction]
exports.yourAction = (req, res) => {
  const assistant = new Assistant({request: req, response: res});
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req.body));

  // Fulfill action business logic
  function responseHandler (assistant) {
    // Complete your fulfillment logic and send a response
    assistant.tell('Hello, World!');
  }

  const actionMap = new Map();
  actionMap.set('<API.AI_test>', responseHandler);

  assistant.handleRequest(actionMap);
};

