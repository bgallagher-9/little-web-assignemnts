var theList = document.querySelector('ol');


theList.addEventListener('click', function(eventname){

  var previouslySelected = document.querySelector('.selected');
  if (previouslySelected !== null) {
    previouslySelected.classList.remove('selected');
  }

  if (eventname.target.tagName === 'LI') {
    eventname.target.classList.add('selected');
  }
});
