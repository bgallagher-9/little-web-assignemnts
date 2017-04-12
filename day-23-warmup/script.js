// var fs = require('fs');
// var fileData = fs.readFileSync('HallOfFame.csv', 'utf-8');
// var lines = fileData.split('\r\n');
// for (var i = 0; i < lines.length-1; i++) {
//   var line = lines[i].split(',');
//
//   // var lastPiece = pieces;
//   // var output = 0;
//   if (line[2] === '2016' && line[4] > 200) {
//     // output = line[0]
//   };
//   // console.log(line[0]);
// };


var fs = require('fs');
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
    });
    // if (year == '2016' && votes > 200) {
    //     console.log(person);
    // }
  }
});
