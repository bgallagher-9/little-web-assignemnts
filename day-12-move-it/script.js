var downButton = document.querySelector('#down-button');
var upButton = document.querySelector('#up-button');
var leftButton = document.querySelector('#left-button');
var rightButton = document.querySelector('#right-button');
var theBall = document.querySelector('.circle');
var topValue = 0;
var leftValue = 0;
downButton.addEventListener('click', function() {
  topValue += 10;
  theBall.style.top = topValue + 'px';
});
upButton.addEventListener('click', function() {
  topValue -= 10;
  theBall.style.top = topValue + 'px';
});
leftButton.addEventListener('click', function() {
  leftValue -= 10;
  theBall.style.left = leftValue + 'px';
});
rightButton.addEventListener('click', function() {
  leftValue += 10;
  theBall.style.left = leftValue + 'px';
});
