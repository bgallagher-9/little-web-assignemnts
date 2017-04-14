var tbody = document.querySelector('tbody');
var prodquery = document.querySelector('#product-query');
var vioquery = document.querySelector('#violation-query');
var firmquery = document.querySelector('#firm-query');

var ajaxdata;
var filteredonpage;

function putOnPage(list) {
  // var ajaxfilteredonpage = ajaxfiltered;
  // console.log('listing', list);
  for (var i = 0; i < ajaxdata.values.length; i++) {
      var datarow = document.createElement('tr');
      var datedata = document.createElement('td');
      var productdata = document.createElement('td');
      var violationdata = document.createElement('td');
      var firmdata = document.createElement('td');
      datedata.textContent = ajaxdata.values[i].date;
      productdata.textContent = ajaxdata.values[i].product;
      violationdata.textContent = ajaxdata.values[i].violation;
      firmdata.textContent = ajaxdata.values[i].firm;
      datarow.appendChild(datedata);
      datarow.appendChild(productdata);
      datarow.appendChild(violationdata);
      datarow.appendChild(firmdata);
      tbody.appendChild(datarow);
      // console.log('datarow', datarow);
      //});

  }
  datarow.innerHTML = filteredonpage;
}
var prodinput = '';
var vioinput = '';
var firminput = '';

prodquery.addEventListener('keyup', function() {
    prodinput = prodquery.value.toUpperCase();
    // console.log('type', prodinput);
    dofilter();
});
vioquery.addEventListener('keyup', function() {
    vioinput = vioquery.value.toUpperCase();
    dofilter();
});
firmquery.addEventListener('keyup', function() {
    firminput = firmquery.value.toUpperCase();
    // firminput.innerHTML = '';
    dofilter();

})
$.ajax({
        url: '/api/viodata'
    })
.done(function(data) {
    ajaxdata = data;
    putOnPage(ajaxdata.values);
});

function dofilter() {
    // console.log('filter', things);
  var ajaxfiltered = [];
  for (var i = 0; i < ajaxdata.values.length; i++) {
    var things = ajaxdata.values[i];
    // console.log('for loop', ajaxdata.values[i]);
    if (prodinput !== '') {
      if (things.product.indexOf(prodinput) === -1) {
          // console.log('skipping', things.product, 'for', prodinput);
          continue;
      }
    }
    if (vioinput !== '') {
      if (things.violation.indexOf(vioinput) === -1) {
          // console.log('skipping', things.violation, 'for', vioinput);
          continue;
      }
    }
    if (firminput !== '') {
      if (things.firm.indexOf(firminput) === -1) {
          continue;
      }
    }
    ajaxfiltered.push(things);
  }
  putOnPage(ajaxfiltered);
  console.log('things', ajaxfiltered);
  var filteredonpage = ajaxfiltered;
};
    // dofilter();
