var dangerZone = document.querySelector('#danger-zone');
// var audio = new Audio('firework.aif');

// console.log(fwAudio);
var size = 128;
// var row = 0;
// var column = 0;
var intervalId;
var frameColumn = 0;


dangerZone.addEventListener('click', function(evt) {
  var ypos = evt.pageY-64;
  var xpos = evt.pageX-64;
  var explosion = new Explosion(xpos, ypos);
  dangerZone.appendChild(explosion.div);
  explosion.start();
  function play(){
       var audio = document.getElementById("fireworkaudio");
       audio.play();
                 }
  play();
  // console.log(xpos, ypos);
  // explode(xpos, ypos);
  // explosion1();
});

// function explode(xpos, ypos) {
//   var firework = document.createElement('div');
//   firework.className = 'firework';
//   firework.style.left = xpos + 'px';
//   firework.style.top = ypos + 'px';
//   firework.style.display = 'inline-block';
//   dangerZone.appendChild(firework);
//   cycler(firework);
// };
//
// function cycler(firework) {
//   if (intervalId === undefined) {
//     intervalId = setInterval(function() {
//       positionX = column * size * -1;
//       positionY = row * size * -1;
//       // console.log('px ' + positionX, 'py ' + positionY)
//       firework.style.backgroundPositionX = positionX + 'px';
//       firework.style.backgroundPositionY = positionY + 'px';
//       column += 1;
//       if (column === 8) {
//         column = 0;
//         row += 1;
//         frameColumn += 1;
//       };
//       if (row === 8) {
//         column += 1;
//         row = 0;
//       };
//       if (frameColumn  >= 8){
//         clearInterval(intervalId);
//         intervalId = undefined;
//         firework.style.display = 'none';
//         frameColumn = 0;
//       };
//     }, 25);
//   };
// };


function Explosion(xpos, ypos) {
  this.div = document.createElement('div');
  this.div.classList.add('firework');
  this.div.style.left = xpos + 'px';
  this.div.style.top = ypos + 'px';
  this.row = 0;
  this.column = 0;
  console.log('px ' + xpos, 'py' + ypos);
    if (this === 'DIV') {
    this.div.remove();
  }
}

Explosion.prototype.start = function() {
  // console.log('starting')
  var self = this
  self.intevalID = setInterval(function() {
    self.positionX = self.column * size * -1;
    self.positionY = self.row * size * -1;
    // console.log('px ' + self.positionX, 'py ' + self.positionY)
    self.div.style.backgroundPositionX = self.positionX + 'px';
    self.div.style.backgroundPositionY = self.positionY + 'px';
    // console.log(self.positionX);
    // self.column += 1;
    if (self.row === 7 && self.column === 7) {
      clearInterval(self.intervalID);
      // self.intervalId = undefined;

      // self.div.style.display = 'none';
      // self.row = 0;
      // self.column = 0;
      self.div.remove();
    }
    else if (self.column === 7) {
      self.column = 0;
      self.row += 1;
    }
    else {
      self.column += 1;
    };
    // console.log('row', self.row, 'column', self.column)




    // if (self.column === 8) {
    //   self.column = 0;
    //   self.row += 1;
    //   self.frameColumn += 1;
    // };
    // if (self.row === 8) {
    //   self.column += 1;
    //   self.row = 0;
    // };
    // if (self.frameColumn  >= 8){
    //   clearInterval(self.intervalId);
    //
    //   self.frameColumn = 0;
    //};
  }, 28);
};

// setTimeout(function() {
//   var explosion2 = new Explosion(350, 350);
//   dangerZone.appendChild(explosion2.div);
//   explosion2.start();
// }, 500);
