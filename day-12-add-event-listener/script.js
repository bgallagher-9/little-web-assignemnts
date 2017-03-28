var theHeader = document.querySelector('#the-header');
theHeader.textContent = 'JavaScript Changed My Life!';

function clickTheHeader() {
  console.log('clicked!');
}

theHeader.addEventListener('click', clickTheHeader);


theHeader.addEventListener('mouseover', function() {
  theHeader.classList.toggle('hovery');
  console.log('the mouse is over!');
})

theHeader.addEventListener('mouseout', function() {
  theHeader.classList.remove('hovery');
  console.log('the mouse is out.');
});

var theP = document.querySelector('.the-p');

theP.addEventListener('click', function() {
  console.log('clicked the paragraph.');
  theP.textContent = 'Also changed this on click';
});

theP.addEventListener('click', function() {
  // theP.classList.add('on');
  theP.classList.toggle('on');
})
