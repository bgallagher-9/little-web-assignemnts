var jqprom = $.ajax({
  url: 'https://swapi.co/api/planets/'
});

var planetList = document.querySelector('#planet-list');
var body = document.querySelector('body');
var title = document.createElement('h1');
var container = document.querySelector('.container');
title.setAttribute("class", "title");
title.textContent = 'Planets of Star Wars';
// body.appendChild(title);


jqprom.done(function(data) {


  for (var i = 0; i < data.results.length; i++) {
    var swapili = document.createElement('li');
    var swapih2 = document.createElement('h2');
    var swapidivorb = document.createElement('div');
    var swapidivclimate = document.createElement('div');

    swapih2.textContent = data.results[i].name;
    swapidivorb.textContent = 'Orbital Period = ' +  data.results[i].orbital_period;
    swapidivclimate.textContent = 'Climate = ' + data.results[i].climate;
    planetList.appendChild(swapili);
    swapili.appendChild(swapih2);
    swapili.appendChild(swapidivorb);
    swapili.appendChild(swapidivclimate);
  }

  var nextDiv = document.createElement('div');
  nextDiv.setAttribute("class", "nextDiv");
  var nextPeople = document.createElement('a');

  nextPeople.textContent = 'Next Page';
  nextPeople.href = data.next;
  body.appendChild(nextDiv);
  nextDiv.appendChild(nextPeople);
  // console.log(data.next);
});
