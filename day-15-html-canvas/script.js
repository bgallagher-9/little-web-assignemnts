var square = document.getElementById('square');
var sqx = square.getContext('2d');
square.width = square.scrollWidth;
square.height = square.scrollHeight;

circle.width = circle.scrollWidth;
circle.height = circle.scrollHeight;

sqx.fillStyle = 'orange';
sqx.fillRect(100, 140, 100, 100);

var circle = document.getElementById('circle');
var crx = circle.getContext('2d');

// crx.beginPath();
// crx.arc(30, 40, 50, 3, 1 * Math.PI);

// crx.stroke();
crx.beginPath();
crx.arc(10, 100, 50, 1, 2 * Math.PI);
crx.stroke();
crx.fillStyle = ('yellow');
crx.fill();
// crx.lineWidth = -1;
