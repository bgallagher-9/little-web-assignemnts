var tbody = document.querySelector('tbody');
var ajaxdata;

function putOnPage(list) {
  for (var i = 0; i < ajaxdata.values.length; i++) {
    var tr = document.createElement('tr');
    var tdinst = document.createElement('td');
    var tdact = document.createElement('td');
    tdinst.textContent = ajaxdata.values[i].Name;
    tdact.textContent = ajaxdata.values[i].Act75;
    tr.appendChild(tdinst);
    tr.appendChild(tdact);
    tbody.appendChild(tr);
    // console.log(ajaxdata.values[i]);
  }
}
$.ajax({
  url: '/api/scorecard'
})
.done(function(data) {
  // console.log(data);
  ajaxdata = data;
  putOnPage(ajaxdata.values);
});
