var jqpromV = $.ajax({
  url: 'https://swapi.co/api/vehicles/'
});

var vehicleList = document.querySelector('#vehicle-list');
var body = document.querySelector('body');
var container = document.querySelector('.container');
var title = document.createElement('h1');
title.setAttribute("class", "title");
title.textContent = 'Vehicles of Star Wars';
// body.insertBefore(title, swapili);


jqpromV.done(function(data) {


  for (var i = 0; i < data.results.length; i++) {
    var swapili = document.createElement('li');
    var swapih2 = document.createElement('h2');
    var swapidivmodel = document.createElement('div');
    var swapidivmanu = document.createElement('div');

    swapih2.textContent = data.results[i].name;
    swapidivmodel.textContent = 'Model = ' +  data.results[i].model;
    swapidivmanu.textContent = 'Manufacturer = ' + data.results[i].manufacturer;
    vehicleList.appendChild(swapili);
    swapili.appendChild(swapih2);
    swapili.appendChild(swapidivmodel);
    swapili.appendChild(swapidivmanu);
  }

  var nextDiv = document.createElement('div');
  nextDiv.setAttribute("class", "nextDiv");
  var nextVehicle = document.createElement('a');

  nextVehicle.textContent = 'Next Page';
  nextVehicle.href = data.next;
  body.appendChild(nextDiv);
  nextDiv.appendChild(nextVehicle);
  // console.log(data.next);
});
