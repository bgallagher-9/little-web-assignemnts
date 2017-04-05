var navFade = document.querySelector('nav');
var isHidden = true;

window.addEventListener('scroll', function(eventname) {

  if (window.scrollY > 500 && isHidden === true) {
    navFade.classList.add('opaque');
    // navFade.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    isHidden = false;
  }
  else if (window.scrollY <= 500 && isHidden === false) {
    navFade.classList.remove('opaque');
    isHidden = true;
  }
});
