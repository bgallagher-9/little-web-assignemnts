var navFill = document.querySelector('nav');
var filledNav = false;
var tFace = document.querySelector('.content');
var faceYea = false;
var bgImageShift = document.querySelector('.bgimage');

window.addEventListener('scroll', function(eventname) {

  if (window.scrollY >= 300 && filledNav === false) {
    navFill.classList.add('navblackfill') && navFill.classList.remove('navwhitefill') &&
    bgImageShift.classList.add('bgimage2');
    // navFill.classList.remove('navwhitefill');
    filledNav = true;
  }
  else if (window.scrollY <= 300 && filledNav === true) {
    navFill.classList.remove('navblackfill'); navFill.classList.add('navwhitefill');
    bgImageShift.classList.remove('bgimage');
    // navFill.classList.add('navwhitefill');
    filledNav = false;
  }
});

window.addEventListener('scroll', function(eventname2) {
  // console.log(window.scrollY);
  if (window.scrollY > 1300 && window.scrollY <= 1500 && faceYea === false) {
    tFace.classList.add('trollio');
    faceYea = true;
  }
  else if (window.scrollY >= 1500 && faceYea === true) {
    tFace.classList.remove('trollio');
    faceYea = false;
  }
  else if (window.scrollY < 1300 && faceYea === true) {
    tFace.classList.remove('trollio')
    faceYea = false;
  }
});
