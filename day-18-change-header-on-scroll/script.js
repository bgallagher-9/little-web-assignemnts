var navFill = document.querySelector('nav');
var filledNav = false;
var tFace = document.querySelector('.content');
var faceYea = false;

window.addEventListener('scroll', function(eventname) {

  if (window.scrollY >= 300 && filledNav === false) {
    navFill.classList.add('navblackfill');
    navFill.classList.remove('navwhitefill');
    filledNav = true;
  }
  // else if (window.scrollY <= 300 && filledNav === true) {
  //   navFill.classList.remove('navblackfill');
  //   navFill.classList.add('navwhitefill');
  //   filledNav = false;
  // }
  // else if (window.scrollY >= 600 && filledNav === true) {
  //   navFill.classList.remove('navblackfill');
  //   navFill.classList.remove('navwhitefill');
  //   navFill.classList.add('navmidfill');
  //   filledNav = false;
  // }
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
