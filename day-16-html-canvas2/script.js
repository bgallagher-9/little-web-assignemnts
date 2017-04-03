var square = document.getElementById('square');
var sqx = square.getContext('2d');
square.width = square.scrollWidth;
square.height = square.scrollHeight;


// squares
// sqx.fillStyle = 'orange';
// sqx.fillRect(100, 140, 100, 100);
// sqx.strokeStyle = 'blue';
// sqx.strokeRect(400, 200, 100, 100);

// angles
// sqx.beginPath();
// sqx.moveTo(500, 50);
// sqx.lineTo(200, 350);
// sqx.lineTo(150, 90);
// sqx.fill();
// sqx.fillStyle = 'green';


sqx.beginPath();
sqx.arc(200, 200, 50, 0, Math.PI * 2);
sqx.fill();
sqx.fillStyle = '#F00';

// var circle = document.getElementById('circle');
// var crx = circle.getContext('2d');

// circle.width = circle.scrollWidth;
// circle.height = circle.scrollHeight;

// crx.beginPath();
// crx.arc(30, 40, 50, 3, 1 * Math.PI);

// crx.stroke();
// crx.beginPath();
// crx.arc(10, 100, 50, 1, 2 * Math.PI);
// crx.stroke();
// crx.fillStyle = ('yellow');
// crx.fill();
// crx.lineWidth = -1;
