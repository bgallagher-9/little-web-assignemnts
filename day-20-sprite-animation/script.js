var fire1 = document.querySelector('.fire1');
var fire2 = document.querySelector('.fire2');
var burnit = document.querySelector('#burnit');
var positionX = 0;
var positionY = 0;
var frameWidth = 100;
// var positionY = 0;
var intervalId;

// var direction = 'left';

// window.addEventListener('keydown', function(eventname) {
//   console.log(eventname.keyCode);
//   if (eventname.keyCode === 37) {
//   // direction = 'left';
//   positionY = -25.5;
//   }
// });

// burnit.addEventListener('click', function(){
//   console.log('stop');
//   clearInterval(intervalId);
// });

burnit.addEventListener('click', function(){
  if (intervalId === undefined) {
    intervalId = setInterval(function() {
      fire1.style.backgroundPositionX = positionX + 'px';
      positionX -= 100;
      if (positionX >= frameWidth) {
        positionX = 0;
      }
    }, 80);
    burnit.textContent = 'STOP';
  }
  else {
    clearInterval(intervalId);
    intervalId = undefined;
    burnit.textContent = 'Burn It!';
  }
});

// function animate() {
//   // console.log(positionX);
//   fire1.style.backgroundPositionX = positionX + 'px';
//   // fire1.style.backgroundPositionY = positionY + 'px';
//   positionX -= 340;
//   if (positionX >= frameWidth) {
//     positionX = 0;
//   }
//   intervalId = setTimeout(animate, 70);
//
// };
// animate();


// function animateSprite() {
//   spriteElement.style.backgroundPosition = curPx + 'px 0px';
//   curPx = curPx + frameWidth;
//   if (curPx >= spriteWidth) {
//   curPx = 0;
//   }
//   ti = setTimeout(animateSprite, 80);
//   }
//   animateSprite();
// });
