// var fs = require('fs');
// var fileData = fs.readFileSync('HallOfFame.csv', 'utf-8');
// var lines = fileData.split('\r\n');
// // console.log(lines.length);
// // console.log(lines3);
// for (var i = 0; i < lines.length-1; i++) {
//   var line = lines[i];
//   var pieces = line.split(',');
//   var lastPiece = pieces;
//   // var output = 0;
//   if (line[2] === '2016' && line[4] > 200) {
//     // output = line[0]
//   };
//   // console.log(line[0]);
// };


var fs = require('fs');

fs.readFile('HallOfFame.csv', 'utf-8', function(err, data) {
  var lines = data.split('\r\n');

  for (var i = 1; i < lines.length -1; i++) {
    var values = lines[i].split(',');

    var person = values[0];
    var year = values[1];
    var votes = values[5];

    if (year == '2016' && votes > 200) {
        console.log(person);
    }
  }
});








// var fs = require('fs');
// // console.log(fs);
// var fileData = fs.readFileSync('authors.csv', 'utf-8');
// var lines = fileData.split('\n');
// // console.log(lines.length-1);
// console.log(lines[8] + 'xx');
// // console.log(lines);
// for (var i = 1; i < lines.length-1; i++) {
//   var line = lines[i];
//   var pieces = line.split(',');
//   var lastPiece = pieces
//   // console.log(pieces.length-1);
// };
// console.log('---------------------------');
// fs.readFile('authors.csv', 'utf-8', function(err, data) {
//   console.log('async err', err);
//   console.log('async data', data);
// });
