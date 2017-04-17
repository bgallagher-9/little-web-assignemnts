var planetList = document.querySelector('#planet-list');
var body = document.querySelector('body');
var container = document.querySelector('.container');
var nextPlanet = document.querySelector('#next-button');
var prevPlanet = document.querySelector('#prev-button');
var template = document.querySelector('#planet-template').innerHTML;

var page = 1;
var totalResults;
var pageCount;

function makeAjaxCall() {
  planetList.innerHTML = '';
  var jqpromP = $.ajax({
      url: 'https://swapi.co/api/planets/' + '?page=' + page
  });
  jqpromP.done(function(data) {
      totalResults = data.count;
      pageCount = Math.ceil(totalResults/10);

      var html = '';
      for (var i = 0; i < data.results.length; i++) {
      html += Mustache.render(template, {
        index: i,
        name: data.results[i].name,
        orbit: data.results[i].orbital_period,
        climate: data.results[i].climate});
      };
      planetList.innerHTML = html;



      // for (var i = 0; i < data.results.length; i++) {
      //     var swapili = document.createElement('li');
      //     var swapih2 = document.createElement('h2');
      //     var swapidivorb = document.createElement('div');
      //     var swapidivclimate = document.createElement('div');
      //
      //     swapih2.textContent = data.results[i].name;
      //     swapidivorb.textContent = 'Orbital Period = ' + data.results[i].orbital_period;
      //     swapidivclimate.textContent = 'Climate = ' + data.results[i].climate;
      //     planetList.appendChild(swapili);
      //     swapili.appendChild(swapih2);
      //     swapili.appendChild(swapidivorb);
      //     swapili.appendChild(swapidivclimate);
      // }
      if (page === 1) {
          prevPlanet.style.display = 'none';
      } else {
          prevPlanet.style.display = 'inline';
      }
      if (page >= pageCount) {
          nextPlanet.style.display = 'none';
      } else {
          nextPlanet.style.display = 'inline';
      }
  })
};
makeAjaxCall();
nextPlanet.addEventListener('click', function() {
    page += 1;
    makeAjaxCall();
});
prevPlanet.addEventListener('click', function() {
    page -= 1;
    makeAjaxCall();
});
