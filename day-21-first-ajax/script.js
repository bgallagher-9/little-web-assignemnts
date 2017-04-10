// console.log($);
var jqprom = $.ajax({
  url: 'https://swapi.co/api/people/'
  // url: 'https://swapi.co/api/people/?page2/'
});

var peopleList = document.querySelector('#people-list');
var body = document.querySelector('body');
var title = document.createElement('h1');
title.setAttribute("class", "title");
title.textContent = 'Characters of Star Wars';


jqprom.done(function(data) {


  for (var i = 0; i < data.results.length; i++) {
    var swapili = document.createElement('li');
    var swapih2 = document.createElement('h2');
    var swapidivgen = document.createElement('div');
    var swapidivhair = document.createElement('div');

    swapih2.textContent = data.results[i].name;
    swapidivgen.textContent = 'Gender = ' +  data.results[i].gender;
    swapidivhair.textContent = 'Hair Color = ' + data.results[i].hair_color;
    peopleList.appendChild(swapili);
    swapili.appendChild(swapih2);
    swapili.appendChild(swapidivgen);
    swapili.appendChild(swapidivhair);

  }
  body.appendChild(title);
  var nextDiv = document.createElement('div');
  nextDiv.setAttribute("class", "nextDiv");
  var nextPeople = document.createElement('a');

  nextPeople.textContent = 'Next Page';
  nextPeople.href = data.next;
  body.appendChild(nextDiv);
  nextDiv.appendChild(nextPeople);
  // console.log(data.next);
});
