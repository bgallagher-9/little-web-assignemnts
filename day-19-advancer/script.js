var prevButton = document.querySelector('#previous-button');
var nextButton = document.querySelector('#next-button');
var display = document.querySelector('#display');
var currentMessageIndex = 0;

var messages = [
  'Great Job!',
  'Nice Work.',
  'Hmm, you could do better.',
  'Wrong, do it again.',
  'This is most excellent.'
];

display.textContent = messages[0];

nextButton.addEventListener('click', function() {
  currentMessageIndex += 1;
  if (currentMessageIndex === messages.length) {
    currentMessageIndex = 0;
  }
  display.textContent = messages[currentMessageIndex];
  console.log(currentMessageIndex);
});

prevButton.addEventListener('click', function() {
  currentMessageIndex -= 1;
  if (currentMessageIndex < 0) {
    currentMessageIndex = messages.length - 1;
  }
  display.textContent = messages[currentMessageIndex];



  console.log(currentMessageIndex);
});
