// console.log($);
var jqprom = $.ajax({
  url: 'https://swapi.co/api/people/'
});

var peopleList = document.querySelector('#people-list');

jqprom.done(function(data) {
  console.log('got it', data)

  for (var i = 0; i < data.results.length; i++) {
    console.log('each object', data.results[i])
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
    // swapili.appendChild(swapih2);
  }
});
