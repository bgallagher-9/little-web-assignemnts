var upButton = document.querySelector('.up-button');
var downButton = document.querySelector('.down-button');
var int = document.querySelector('.integer');
var startNum = 0;
int.textContent = startNum;

upButton.addEventListener('click', function() {
  startNum++;
  int.textContent = startNum;
});
downButton.addEventListener('click', function() {
  if (startNum <= 0) {
    int.textContent = 0;
  }
  else {
    startNum--;
    int.textContent = startNum;
  }
});
