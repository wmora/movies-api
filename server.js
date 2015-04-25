var express = require('express');
var app = express();

app.get('/movies', function(req, res){
  res.send('A list of movies should be returned here');
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
