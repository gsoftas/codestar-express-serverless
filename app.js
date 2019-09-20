var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/name/:name', function(req, res) {
  if(req.params.name) {
    res.send({
      "Output": `Hello ${req.params.name}`
    })
  } else {
    res.send({
      "Output": "Hello World!"
    });
  }
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
