var express = require('express');
var app = express();

app.get('/', function(req, res) {

  if(req.query.name) {
    res.send({
      "Output": `Hello ${req.query.name}`
    })
  } else {
    res.send({
      "Output": "Hello GET Stranger!"
    });

    console.log("Request: ", req);
  }
});

// app.post('/', function(req, res) {
//   res.send({
//     "Output": "Hello World!"
//   });
// });

app.post('/', function(req, res) {
  if(req.params.name) {
    res.send({
      "Output": `Hello ${req.params.name}`
    })
  } else {
    res.send({
      "Output": "Hello POST Stranger!"
    });
  }
});

app.post('/name', function(req, res) {
  if(req.params.name) {
    res.send({
      "Output": `Hello ${req.params.name}`
    })
  } else {
    res.send({
      "Output": "Hello POST Stranger!"
    });
  }
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
