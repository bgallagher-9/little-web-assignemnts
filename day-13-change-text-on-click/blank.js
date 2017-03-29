var thePara = document.querySelector('.the-paragraph');
function clickPara() {
  thePara.textContent = 'OOOHHH YEEEAAA!!! AGAIN!!!';
  function clickPara2() {
    thePara.textContent = 'Ok that\'s enough.';
  }
  thePara.addEventListener('click', clickPara2);
}
thePara.addEventListener('click', clickPara);
