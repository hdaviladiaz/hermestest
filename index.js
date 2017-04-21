var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('pages/index');
});

app.post('/', function (req, res) {
  var response={
  "speech": "Hello world",
  "displayText": "Hello world",
  "data": {
    "google": {
      "expect_user_response": true,
      "is_ssml": true,
      "permissions_request": {}
    }
  },
  "contextOut": {}
}
  res.end(JSON.stringify(response));
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
