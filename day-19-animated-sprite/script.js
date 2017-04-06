var link = document.querySelector('#link');
var stoplink = document.querySelector('#stop-button');
var startlink = document.querySelector('#start-button');
var positionX = 0;
var positionY = -650;

// var direction = 'left';

window.addEventListener('keydown', function(eventname) {
  console.log(eventname.keyCode);
  if (eventname.keyCode === 37) {
  // direction = 'left';
  positionY = -650;
  }
  else if (eventname.keyCode === 39) {
    // direction = 'right';
    positionY = -910;
  }
  else if (eventname.keyCode === 38) {
    // direction = 'right';
    positionY = -750;
  }
  else if (eventname.keyCode === 40) {
    // direction = 'right';
    positionY = -910;
  }
});

stoplink.addEventListener('click', function(){
  console.log('stop');
  clearInterval(intervalId);
});

startlink.addEventListener('click', function(){
  intervalId = setInterval(animate, 75);
  // console.log('stop');
  // clearInterval(intervalId);
});

function animate() {
  positionX -= 120;
  // console.log(positionX);
  link.style.backgroundPositionX = positionX + 'px';
  link.style.backgroundPositionY = positionY + 'px';
    // console.log(hi);
};

var intervalId = setInterval(animate, 75);


// setInterval(function() {
// positionX -= 120;
// // console.log(positionX);
// link.style.backgroundPositionX = positionX + 'px';
// link.style.backgroundPositionY = positionY + 'px';
//   // console.log(hi);
// }, 75);
