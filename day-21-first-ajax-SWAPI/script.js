var peopleList = document.querySelector('#people-list');
var body = document.querySelector('body');
var container = document.querySelector('.container');
var nextPeople = document.querySelector('#next-button');
var prevPeople = document.querySelector('#prev-button');
var template = document.querySelector('#row-template').innerHTML;

var page = 1;
var totalResults;
var pageCount;

function makeAjaxCall() {
  peopleList.innerHTML = '';
  var jqprom = $.ajax({
      url: 'https://swapi.co/api/people/' + '?page=' + page
  });
  jqprom.done(function(data) {
    console.log(data);
    totalResults = data.count;
    pageCount = Math.ceil(totalResults/10);

    var html = '';
    for (var i = 0; i < data.results.length; i++) {
    html += Mustache.render(template, {
      index: i,
      name: data.results[i].name,
      gender: data.results[i].gender,
      hair: data.results[i].hair_color});
    };
    peopleList.innerHTML = html;

      // for (var i = 0; i < data.results.length; i++) {
      //     var swapili = document.createElement('li');
      //     var swapih2 = document.createElement('h2');
      //     var swapidivgen = document.createElement('div');
      //     var swapidivhair = document.createElement('div');
      //
      //     swapih2.textContent = data.results[i].name;
      //     swapidivgen.textContent = 'Gender = ' + data.results[i].gender;
      //     swapidivhair.textContent = 'Hair Color = ' + data.results[i].hair_color;
      //     peopleList.appendChild(swapili);
      //     swapili.appendChild(swapih2);
      //     swapili.appendChild(swapidivgen);
      //     swapili.appendChild(swapidivhair);
      // }
      if (page === 1) {
          prevPeople.style.display = 'none';
      } else {
          prevPeople.style.display = 'inline';
      }
      if (page >= pageCount) {
          nextPeople.style.display = 'none';
      } else {
          nextPeople.style.display = 'inline';
      }
  })
};
makeAjaxCall();
nextPeople.addEventListener('click', function() {
    page += 1;
    makeAjaxCall();
});
prevPeople.addEventListener('click', function() {
    page -= 1;
    makeAjaxCall();
});
