var dataid = document.querySelector('div');
var swapiPeopleOL = document.querySelector('#swapi-people');
var listItemTemplateText = document.querySelector('#list-item-template').innerHTML;
var detailTemplate = document.querySelector('#detail-template').innerHTML;
var detailsDiv = document.querySelector('#details');
var ajaxData;


$.ajax({
  url: 'http://swapi.co/api/people'
})
.done(function(data) {
  ajaxData = data;
  console.log(data);

  var html = '';
  for (var i = 0; i < data.results.length; i++) {
    html += Mustache.render(listItemTemplateText, {
      index: i,
      name: data.results[i].name});
  };
  swapiPeopleOL.innerHTML = html;
  // manually adding to DOM
  // ex1
  // for (var i = 0; i < data.results.length; i++) {
  //   swapli.setAttribute('data-index', i);
  //   swapli.textContent = data.results[i].name;
  // }
  // ex2
  // for (var i = 0; i < data.results.length; i++) {
  //   var swapili = document.createElement('li');
  //   swapili.textContent = data.results[i].name;
  //   swapiPeopleOL.appendChild(swapili);
  // }
});
swapiPeopleOL.addEventListener('click', function(evt) {
  if (evt.target.tagName === 'LI') {
    var index = evt.target.getAttribute('data-index');
    var person = ajaxData.results[index];
    console.log(person);

    var html = Mustache.render(detailTemplate, person);
    detailsDiv.innerHTML = html;
  }
});
