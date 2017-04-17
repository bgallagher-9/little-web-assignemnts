var express = require('express');
var app = express();
var fs = require('fs');


app.use(express.static('public'));

app.set('view engine', 'ejs');
app.get('/api/viodata', function(reg, res){

  fs.readFile('violation-data.csv', 'utf-8', function(err, data) {

    var lines = data.split('\n');
    var arr = [];
    for (var i = 1; i < lines.length -1; i++) {
      var values = lines[i].split(',');
      var date = values [0];
      var product = values [1];
      var violation = values[2];
      var firm = values[3];
      arr.push({
        date: date,
        product: product,
        violation: violation,
        firm: firm
      });
    }
    res.send({
      values: arr
    });
    // console.log('got it', lines);
  });
});

app.get('/about', function(req, res) {
  res.render('pages/about', { greeting: 'Hello, now go away' })
});


app.listen(5555, function() {
  console.log('listening on port 5555');
});
