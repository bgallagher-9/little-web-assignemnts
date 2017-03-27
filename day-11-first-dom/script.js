var theParagraph = document.querySelector('p');
console.log(theParagraph);
theParagraph.textContent = 'Los Pantalones'

var theSecond = document.querySelector('#second-paragraph');
console.log(theSecond);
theSecond.textContent = "this is not my second paragraph.  ahahahahah";

var allThePs = document.querySelectorAll('p');
console.log(allThePs);
allThePs.textContent = "allllllll the PPPPPPPPPPs";


var theOL = document.querySelector('ol');
console.log('the children', theOL.children);
