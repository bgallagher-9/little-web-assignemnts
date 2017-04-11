var fs = require('fs');

// console.log(fs);

var fileData = fs.readFileSync('authors.csv', 'utf-8');



var lines = fileData.split('\n');
// console.log(lines.length-1);
console.log(lines[8] + 'xx');
// console.log(lines);

for (var i = 1; i < lines.length-1; i++) {
  var line = lines[i];
  var pieces = line.split(',');
  var lastPiece = pieces
  // console.log(pieces.length-1);

};

console.log('---------------------------');

fs.readFile('authors.csv', 'utf-8', function(err, data) {
  console.log('async err', err);
  console.log('async data', data);

});
