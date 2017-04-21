var clearButton = document.querySelector('#clear-button');
var firstName = document.querySelector('#first-name');
var lastName = document.querySelector('#last-name');
var sendButton = document.querySelector('#send-button');
var missingName = document.querySelector('#missing-name');

clearButton.addEventListener('click',function(evt) {
  if (firstName.value !== '' || lastName.value !== '') {
    evt.preventDefault();
    firstName.value = '';
    lastName.value = '';
    missingName.style.display = 'none';
  }

});

sendButton.addEventListener('click', function(evt) {

  if (firstName.value === '' || lastName.value === '') {
    evt.preventDefault();
    missingName.textContent = "Please fill out the name fields."
  };

});
// missingName.textContent.display = 'hidden';
