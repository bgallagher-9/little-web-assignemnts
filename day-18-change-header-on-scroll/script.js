var navFill = document.querySelector('nav');
var filledNav = false;
var tFace = document.querySelector('.content');
var faceYea = false;

window.addEventListener('scroll', function(eventname) {

  if (window.scrollY > 300 && filledNav === false) {
    navFill.classList.add('navshrinkfill');
    navFill.classList.remove('navgrowfill');
    filledNav = true;
  }
  else if (window.scrollY <= 300 && filledNav === true) {
    navFill.classList.remove('navshrinkfill');
    navFill.classList.add('navgrowfill');
    filledNav = false;
  }
});

window.addEventListener('scroll', function(eventname2) {
  if (window.scrollY > 1100 && faceYea === false) {
    tFace.classList.add('trollio');
    faceYea = true;
  }
  else if (window.scrollY <= 1500 && faceYea === true) {
    tFace.classList.remove('trollio');
    faceYea = false;
  }
});
