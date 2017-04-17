var vehicleList = document.querySelector('#vehicle-list');
var body = document.querySelector('body');
var container = document.querySelector('.container');
var nextVehicle = document.querySelector('#next-button');
var prevVehicle = document.querySelector('#prev-button');
var template = document.querySelector('#vehicle-template').innerHTML;

var page = 1;
var totalResults;
var pageCount;

function makeAjaxCall() {
  vehicleList.innerHTML = '';
  var jqpromV = $.ajax({
    url: 'https://swapi.co/api/vehicles/' + '?page=' + page
  });
  jqpromV.done(function(data) {
    totalResults = data.count;
    pageCount = Math.ceil(totalResults/10);

    var html = '';
    for (var i = 0; i < data.results.length; i++) {
    html += Mustache.render(template, {
      index: i,
      name: data.results[i].name,
      model: data.results[i].model,
      manufacturer: data.results[i].manufacturer});
    };
    vehicleList.innerHTML = html;


    // for (var i = 0; i < data.results.length; i++) {
    //   var swapili = document.createElement('li');
    //   var swapih2 = document.createElement('h2');
    //   var swapidivmodel = document.createElement('div');
    //   var swapidivmanu = document.createElement('div');
    //
    //   swapih2.textContent = data.results[i].name;
    //   swapidivmodel.textContent = 'Model = ' +  data.results[i].model;
    //   swapidivmanu.textContent = 'Manufacturer = ' + data.results[i].manufacturer;
    //   vehicleList.appendChild(swapili);
    //   swapili.appendChild(swapih2);
    //   swapili.appendChild(swapidivmodel);
    //   swapili.appendChild(swapidivmanu);
    // }
    if (page === 1) {
        prevVehicle.style.display = 'none';
    } else {
        prevVehicle.style.display = 'inline';
    }
    if (page >= pageCount) {
        nextVehicle.style.display = 'none';
    } else {
        nextVehicle.style.display = 'inline';
    }
  })
};
makeAjaxCall();
nextVehicle.addEventListener('click', function() {
  page += 1;
  makeAjaxCall();
});
prevVehicle.addEventListener('click', function() {
  page -= 1;
  makeAjaxCall();
});
