var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));
app.get('/api/scorecard', function(reg, res) {
  fs.readFile('Cohorts-Scorecard.csv', 'utf-8', function(err, data) {

    var lines = data.split('\r\n');
    // console.log(lines[0]);

    var arr = [];

    for (var i = 1; i < lines.length - 1; i++) {
      var values = lines[i].split(',');
      var instname = values [3];
      var actcm75 = values [32];
      // console.log(values[i]);
      arr.push({
        Name: instname,
        Act75: actcm75
      });
      // console.log(arr);
    }
    res.send({
      values: arr

    });
  });
});


app.listen(9999, function() {
  console.log('port 9999 reporting for duty')
});
