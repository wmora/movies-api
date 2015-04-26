var express = require('express');
var app = express();

var movies = require('./controllers/movies');

app.get('/movies', function(req, res){
  movies.movies(req, res);
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
