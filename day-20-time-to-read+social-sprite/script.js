var timeToRead = document.querySelector("#time-to-read");
var cont1 = document.querySelector("#na-mailbox").innerHTML;
var cont2 = document.querySelector("#eu-mailbox").innerHTML;
// var navY0 = document.querySelector('header ul');
var twitter = document.querySelector('#twitter');
var facebook = document.querySelector('#facebook');
var youtube = document.querySelector('#youtube');
var gplus = document.querySelector('#gplus');
// var socialLinks = document.querySelector('.social-links')
var twitter2 = document.querySelector('#twitter2');
var facebook2 = document.querySelector('#facebook2');
var youtube2 = document.querySelector('#youtube2');
var gplus2 = document.querySelector('#gplus2');
var words1 = cont1.split(' ');
// console.log(words1);
var words2 = cont2.split(' ');
// console.log(words2);
var wordMinutes = Math.round((words1.length + words2.length) / 230);
console.log(wordMinutes);
var timeToRead = document.querySelector("#time-to-read").innerHTML = "Estimated Reading Time: " + wordMinutes;

window.addEventListener('scroll', function(eventname) {
    if (window.scrollY >= 400) {
        twitter.style.display = 'none';
        facebook.style.display = 'none';
        youtube.style.display = 'none';
        gplus.style.display = 'none';
        twitter2.style.display = 'inline-block';
        facebook2.style.display = 'inline-block';
        youtube2.style.display = 'inline-block';
        gplus2.style.display = 'inline-block';
    } else if (window.scrollY <= 400) {
        twitter.style.display = 'inline-block';
        facebook.style.display = 'inline-block';
        youtube.style.display = 'inline-block';
        gplus.style.display = 'inline-block';
        twitter2.style.display = 'none';
        facebook2.style.display = 'none';
        youtube2.style.display = 'none';
        gplus2.style.display = 'none';
    }
});
