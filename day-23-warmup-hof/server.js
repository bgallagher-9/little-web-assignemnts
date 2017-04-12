var fs = require('fs');
var express = require('express');

var app = express();

app.use(express.static('public'));


app.get('/api/favoritefoods', function(req, res) {

  var output = {
    foods: ['steak', 'tacos', 'smoked chicken', 'beef'],
    sodas: ['Dr. Pepper', "Barq's", 'Cream Soda', 'Beer']
  }

  res.send(output);
  console.log('Listening on port 8564');
});

app.listen(8564, function() {
  console.log('Listening on port 8564');
});





app.get('/api/halloffame', function(req, res) {

  fs.readFile('HallOfFame.csv', 'utf-8', function(err, data) {
    var lines = data.split('\r\n');
    var output = [];
    for (var i = 1; i < lines.length -1; i++) {
      var values = lines[i].split(',');
      var person = values[0];
      var year = values[1];
      var votes = values[5];
      output.push({
        personID: person,
        year: year,
        votes: votes
      })

    }
    res.send({
      stats: output
  })
  })
});
