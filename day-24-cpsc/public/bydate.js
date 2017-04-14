var dateslist = document.querySelector('#dates')
var tbody = document.querySelector('tbody');

var ajaxdata;

$.ajax({
  url: '/api/viodata'
})

.done(function(data) {
  ajaxdata = data;
  // console.log(ajaxdata);
  var dates = [];
  for (var i = 0; i < data.values.length; i++) {
    //gathering the dates in that array
    if (dates.indexOf(data.values[i].date) === -1) {
      dates.push(data.values[i].date);
    }
   }
  for (var i = 0; i < dates.length; i++) {
    var dateitem = document.createElement('li');
    dateitem.textContent = dates[i]
    dateslist.appendChild(dateitem);
  }
});

dateslist.addEventListener('click', function(evt) {
  var text = evt.target.textContent;
  // console.log('clicked', text);

  var filtered = [];
  for (var i = 0; i < ajaxdata.values.length; i++) {
    if (ajaxdata.values[i].date === text) {
      filtered.push(ajaxdata.values[i]);
    }
  }
  putItOnPage(filtered);
});

function putItOnPage(arr) {
  var template = document.querySelector('#row-template').innerHTML;

  // tbody.innerHTML = '';
  var totalHtml = '';
  for (var i = 0; i < arr.length; i++) {
    //Mustache.js method
    //
    var html = Mustache.render(template, arr[i]);
    totalHtml += html;


    //long format of Mustache
    // var html = Mustache.render('<tr><td>{{date}}</td><td>{{violation}}</td><td>{{product}}</td><td>{{firm}}</td></tr>', arr[i]);
    // totalHtml += html;

    // console.log(html);

    //vanilla.js method
    //
    // var tr = document.createElement('tr');
    // var tdvio = document.createElement('td');
    // tdvio.textContent = arr[i].violation;
    // var tdfirm = document.createElement('td');
    // tdfirm.textContent = arr[i].firm;
    // var tdprod = document.createElement('td');
    // tdprod.textContent = arr[i].product;
    //
    // tr.appendChild(tdprod);
    // tr.appendChild(tdvio);
    // tr.appendChild(tdfirm);
    // tbody.appendChild(tr);

    // console.log('firm', tdfirm);

  }
  tbody.innerHTML = totalHtml;
};
