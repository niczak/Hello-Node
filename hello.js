var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) 
{
  console.log("Request received at base url...\n")
  response.send('Hello World via Node.js and Express!');
});

app.get("/test", function(request, response)
{
  console.log("Request received at /test...\n");
  response.send("Welcome to our test environment.");
});

var port = process.env.PORT || 3000;
app.listen(port, function() 
{
  console.log("Listening on " + port);
});
