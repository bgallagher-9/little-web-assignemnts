// var bricir = document.querySelector('#brian');
// var megcir = document.querySelector('#megan');
// var juncir = document.querySelector('#june');
// var milcir = document.querySelector('#milo');
// var dulcir = document.querySelector('#dulce');
//
// function theToggleBri() {
//   bricir.classList.toggle('togciron');
//   //DONT NEST AN EVENTLISTENER INSIDE AN EVENTLISTENER
//   //it will create new eventlisteners that you dont want
//   //---------------------------
//   // function theToggle2() {
//   //   bricir.classList.toggle('togciroff');
//   //   console.log(bricir);
//   // }
//   // bricir.addEventListener('click', theToggle2);
// }
// bricir.addEventListener('click', theToggleBri);
//
// function theToggleMeg() {
//   megcir.classList.toggle('togciron');
// }
// megcir.addEventListener('click', theToggleMeg);
//
// function theToggleJun() {
//   juncir.classList.toggle('togciron');
// }
// juncir.addEventListener('click', theToggleJun);
//
// function theToggleMil() {
//   milcir.classList.toggle('togciron');
// }
// milcir.addEventListener('click', theToggleMil);
//
// function theToggleDul() {
//   dulcir.classList.toggle('togciron');
// }
// dulcir.addEventListener('click', theToggleDul);
//

var getButton = document.querySelector('#add-thing');
var getOl = document.querySelector('ol');
getOl.addEventListener('click', function(eventname) {
  if (eventname.target.tagName == 'LI') {
    eventname.target.classList.toggle('togciron');
  }
});

getButton.addEventListener('click', function() {
  var ola = document.createElement('li');
  ola.textContent = 'new';
  getOl.appendChild(ola);

});
