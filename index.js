var express = require('express');
var app = express();
const Assistant = require('actions-on-google').ApiAiAssistant;
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('pages/index');
});

app.post('/', function (req, res) {
  const assistant = new Assistant({ request: req, response: res });
  function responseHandler(assistant) {
    // Complete your fulfillment logic and send a response
    assistant.tell('Hello, World!');
  }
  const actionMap = new Map();
  actionMap.set('<API.AI_test>', responseHandler);
  assistant.handleRequest(actionMap);
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
