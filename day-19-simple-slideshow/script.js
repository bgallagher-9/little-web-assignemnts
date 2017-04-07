var prevButton = document.querySelector('#previous-button');
var nextButton = document.querySelector('#next-button');
var playButton = document.querySelector('#play-button');
var stopButton = document.querySelector('#stop-button');
var currentImageIndex = 0;

var images = [
  'images/compiling-color1.png',
  'images/dilbertunix.jpg',
  'images/false.png',
  'images/happytrees.png',
  'images/hiparray.jpg',
  'images/itnowork.jpg',
  'images/jokecode.jpg',
];
var display = document.querySelector('#display').src=images[0];
var intervalId;

nextButton.addEventListener('click', function() {
  currentImageIndex += 1;
  if (currentImageIndex === images.length) {
    currentImageIndex = 0;
  }
  display = document.querySelector('#display').src = images[currentImageIndex];
});

prevButton.addEventListener('click', function() {
  currentImageIndex -= 1;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  display = document.querySelector('#display').src = images[currentImageIndex];
});

playButton.addEventListener('click', function() {
  if (intervalId === undefined) {
    intervalId = setInterval(function() {
      currentImageIndex += 1;
      if (currentImageIndex === images.length) {
        currentImageIndex = 0;
      }
      display = document.querySelector('#display').src = images[currentImageIndex];
    }, 1000);
    playButton.textContent = 'STOP';
  }
  else {
    clearInterval(intervalId);
    intervalId = undefined;
    playButton.textContent = 'PLAY';
  }
//
//   intervalId = setInterval(play, 1500);
//   console.log(currentImageIndex);
// })
});
// function play () {
//   currentImageIndex += 1
//   if (currentImageIndex === images.length) {
//     currentImageIndex = 0;
//   }
//   display = document.querySelector('#display').src = images[currentImageIndex];
// };

// = setInterval(play, 1500);
// var counter = 0;
//
// var button = document.querySelector('#play-or-pause');
// var display = document.querySelector('#display');
//
// var intervalId;
//
// button.addEventListener('click', function() {
//   if (intervalId === undefined) {
//     intervalId = setInterval(function() {
//       counter++;
//       display.textContent = counter;
//     }, 50);
//     button.textContent = 'stop';
//   }
//   else {
//     clearInterval(intervalId);
//     intervalId = undefined;
//     button.textContent = 'play';
//   }
// });
