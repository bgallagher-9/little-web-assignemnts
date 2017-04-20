function View(selector) {
  this.el = document.querySelector(selector);
}
View.prototype.text = function(txt) {
  this.el.textContent = txt;
}
View.prototype.click = function(func) {
  var self = this;
  this.el.addEventListener('click', function() {
    func.call(self)
  })
}
// var inputzDiv = new View('.inputz-div');
var inputzDiv = document.querySelector('.inputz-div');
// var inputzField = new View('.inputz-field');
var inputzField = document.querySelector('.inputz-field');
//var clickForJoke = new View('.click-for-joke');
var clickForJoke = document.querySelector('.click-for-joke');
// var chuckJoke = new View('#chuck-joke');
var chuckJoke = document.querySelector('#chuck-joke');
// var jokeTemplate = new View('#joke-template').innerHTML;


//var firstName = new View('.first-input');//input
var firstName = document.querySelector('.first-input');
var lastName = document.querySelector('.last-input');
//var lastName = new View('.last-input');//input
// jokeTemplate.innerHTML = '';
function randJokeOnPage() {
  $.ajax({
      url: 'http://api.icndb.com/jokes/random'
      //?firstName=' + firstName.value + '&lastName=' + lastName.value
  })
  .done(function(data) {
    ajaxData = data;
    chuckJoke.textContent = data.value.joke;
    // console.log(chuckJoke);
  });
}

function nameJokeOnPage() {
  $.ajax({
      url: 'http://api.icndb.com/jokes/random?firstName=' + firstName.value + '&lastName=' + lastName.value
  })
  .done(function(data) {
    ajaxData = data;
    chuckJoke.textContent = data.value.joke;
    // console.log(firstName.input);
  });
}

clickForJoke.addEventListener('click', function() {
  if (firstName === undefined && lastName === undefined) {
    randJokeOnPage();
    console.log(firstName.input);
  }
  // chuckJoke.textContent = '';
  else {
    nameJokeOnPage();
  }
  // console.log('click', randJokeOnPage());
});

clickForJoke.addEventListener('click', function() {
  if (firstName !== undefined && lastName !== undefined) {
    randJokeOnPage();
  }
  // chuckJoke.textContent = '';

  // console.log('click', randJokeOnPage());
});
