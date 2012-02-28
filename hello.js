var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) 
{
  console.log("Request received...\n")
  response.send('Hello World via Node.js and Express!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() 
{
  console.log("Listening on " + port);
});
