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


// display.textContent = images[0];

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
  intervalId = setInterval(play, 1500);
  console.log(currentImageIndex);
})
stopButton.addEventListener('click', function() {
  clearInterval(intervalId);
})

function play () {
  currentImageIndex += 1
  if (currentImageIndex === images.length) {
    currentImageIndex = 0;
  }
  display = document.querySelector('#display').src = images[currentImageIndex];
};

var intervalId = setInterval(play, 1500);
