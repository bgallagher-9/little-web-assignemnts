var scrollyo = document.querySelector('#fixed-div');

var isHidden = false;

window.addEventListener('scroll', function(eventname) {

  if (window.scrollY > 1000 && isHidden === false) {
    scrollyo.style.display = 'none';
    isHidden = true;
  }
  else  if (window.scrollY <= 1000 && isHidden === true) {
    scrollyo.style.display = 'block';
    isHidden = false;
  }
});


window.addEventListener('resize', function() {
  console.log('resizinggggg');
});
