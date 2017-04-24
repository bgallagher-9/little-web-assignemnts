var namesDiv = document.querySelector('#names');
var genderDiv = document.querySelector('#gender');
var selectDiv = document.querySelector('#select-menu');
var textDiv = document.querySelector('#textarea');
var nextName = document.querySelector('#next-button');
var nextGender = document.querySelector('#next-gender-button');
var nextSelect = document.querySelector('#select-menu-button');
var nextText = document.querySelector('#submit-button');
var prevGender = document.querySelector('#previous-gender-button');
var prevSelect = document.querySelector('#previous-select-button');
var prevText = document.querySelector('#previous-text-button');
var firstName = document.querySelector('#first-name');
var lastName = document.querySelector('#last-name');
var missingName = document.querySelector('#missing-name');

nextName.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (firstName.value === '' || lastName.value === '') {
    missingName.textContent = "Please fill out the name fields."
  }
  else {
    namesDiv.style.display = 'none';
    genderDiv.style.display = 'block';
  }
});
nextGender.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log(evt);
  genderDiv.style.display = 'none';
  selectDiv.style.display = 'block';
});
prevGender.addEventListener('click', function(evt) {
  evt.preventDefault();
  namesDiv.style.display = 'block';
  genderDiv.style.display = 'none';
});
prevSelect.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log(evt);
  genderDiv.style.display = 'block';
  selectDiv.style.display = 'none';
});
nextSelect.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log(evt);
  textDiv.style.display = 'block';
  selectDiv.style.display = 'none';
});
prevText.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log(evt);
  textDiv.style.display = 'none';
  selectDiv.style.display = 'block';
});
