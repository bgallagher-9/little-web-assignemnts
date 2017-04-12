var fire1 = document.querySelector('.fire1');
var fire2 = document.querySelector('.fire2');
var boom = document.querySelector('#boom');
var burnit = document.querySelector('#burnit');
var positionX = 0;
var positionY = 0;
var size = 128;
var size2 = 320;
var row = 0;
var column = 0;
var intervalId;
var row2 = 0;
var column2 = 0;
var intervalId2;

boom.addEventListener('click', function(){
  if (intervalId === undefined) {
    intervalId = setInterval(function() {
    positionX = column * size * -1;
    positionY = row * size * -1;
    fire1.style.backgroundPositionX = positionX + 'px';
    fire1.style.backgroundPositionY = positionY + 'px';
    column += 1;
    if (column === 8) {
      column = 0;
      row += 1;
    };
    if (row === 8) {
      column += 1;
      row = 0;
    }
  }, 20);
    boom.textContent = 'STOP';
  }
  else {
    clearInterval(intervalId);
    intervalId = undefined;
    boom.textContent = 'BOOM!';
  }
});

burnit.addEventListener('click', function(){
  if (intervalId2 === undefined) {
    intervalId2 = setInterval(function() {
    positionX = column2 * size2 * -1;
    positionY = row2 * size2 * -1;
    fire2.style.backgroundPositionX = positionX + 'px';
    fire2.style.backgroundPositionY = positionY + 'px';
    column2 += 1;
    if (column2 === 4) {
      column2 = 0;
      row2 += 1;
    };
    if (row2 === 4) {
      column2 += 1;
      row2 = 0;
    }
  }, 50);
    burnit.textContent = 'STOP';
  }
  else {
    clearInterval(intervalId2);
    intervalId2 = undefined;
    burnit.textContent = 'Burn It!';
  }
});
