var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var fs = require("fs");
    var filetext = fs.readFile('index.html');
    response.send(filetext.toString();
//    response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});