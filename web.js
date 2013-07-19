var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var filetext = fs.readFileSync("index.html");
    response.send(filetext.toString());

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});