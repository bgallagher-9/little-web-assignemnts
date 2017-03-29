var theDiva = document.querySelector('.click-me');
function clickDiva() {
  theDiva.classList.toggle('on');
  function clickDiva2() {
    theDiva.classList.toggle('click-me2');
  }
  theDiva.addEventListener('click', clickDiva2);
}
theDiva.addEventListener('click', clickDiva);
