var theSVG = document.querySelector('svg');
var theList = document.querySelector('ol');

console.log(theSVG);

theSVG.addEventListener('click', function() {
  console.log('click');
  theSVG.classList.toggle('flipped');
  theList.classList.toggle('hidden');

});
