// function View(selector) {
//   this.el = document.querySelector(selector);
// }
// View.prototype.text = function(txt) {
//   this.el.textContent = txt;
// }
// View.prototype.click = function(func) {
//   var self = this;
//   this.el.addEventListener('click', function() {
//     func.call(self)
//   })
// }
// var inputzDiv = new View('.inputz-div');
var inputzDiv = document.querySelector('.inputz-div');
// var inputzField = new View('.inputz-field');
// var inputzField = document.querySelector('.inputz-field');
//var clickForJoke = new View('.click-for-joke');
var clickForJoke = document.querySelector('.click-for-joke');
// var chuckJoke = new View('#chuck-joke');
var chuckJoke = document.querySelector('#chuck-joke');
// var jokeTemplate = new View('#joke-template').innerHTML;
var names = document.querySelector('.first-input');
//var firstName = new View('.first-input');//input
// var lastName = document.querySelector('.last-input');
//var lastName = new View('.last-input');//input
// jokeTemplate.innerHTML = '';
var ajaxData;
// console.log(name.value);
function randJokeOnPage() {
  $.ajax({
      url: 'http://api.icndb.com/jokes/random'
  })
  .done(function(data) {
    ajaxData = data;
    if (names.value !== '') {
      chuckJoke.textContent = ajaxData.value.joke.replace('Chuck Norris', names.value);
      console.log('1',names.input);
      console.log('2',names.value);
      console.log('3',data.value.joke);
    }
    else {
      chuckJoke.textContent = ajaxData.value.joke;
    }
  });
};
clickForJoke.addEventListener('click', function() {

  randJokeOnPage();
  // console.log(ajaxData);
});
