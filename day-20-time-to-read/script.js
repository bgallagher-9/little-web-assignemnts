var timeToRead = document.querySelector("#time-to-read");
var cont1 = document.querySelector("#na-mailbox").innerHTML;
var cont2 = document.querySelector("#eu-mailbox").innerHTML;
var navY0 = document.querySelector('header ul');
var twitter = document.querySelector('#twitter');
var facebook = document.querySelector('#facebook');
var youtube = document.querySelector('#youtube');
var gplus = document.querySelector('#gplus');
var navTop = true;
var words1 = cont1.split(' ');
// console.log(words1);
var words2 = cont2.split(' ');
// console.log(words2);
var wordMinutes = Math.round((words1.length + words2.length)/230);
console.log(wordMinutes);
var timeToRead = document.querySelector("#time-to-read").innerHTML = "Estimated Reading Time: " + wordMinutes;

window.addEventListener('scroll', function(eventname) {
  if (window.scrollY >= 400 && navTop === true) {
    // navY0.classList.add('navblackfill');
    twitter.style.display = 'none';
    twitter.classList.remove('twitterI');
    navY0 = false;
  }
  else if (window.scrollY <= 400 && navTop === false) {
    twitter.classList.add('twitterI');
    // navY0.classList.remove('navblackfill');
    // navy0.classList.add('navwhitefill');
    navY0 = true;
  }
});
