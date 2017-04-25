var clickMe = document.querySelector('#click-me');

var count = Number(localStorage.getItem('count set'));
clickMe.innerHTML = count;

clickMe.addEventListener('click', function() {
  count += 1;
  localStorage.setItem('count set', count);
  clickMe.innerHTML = count;
})


//to remove localStorage...
//localStorage.removeItem('keyname')

//var str = JSON.stringify(obj) -- turn object into string
//var obj = JSON.parse(str) -- turn string into object
