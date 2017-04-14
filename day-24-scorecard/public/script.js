var tbody = document.querySelector('tbody');
var ajaxdata;
function putOnPage(list) {
  for (var i = 0; i < ajaxdata.values.length; i++) {
    if (ajaxdata.values[i].Act75 === 'NULL') {
      continue;
    }
      var tr = document.createElement('tr');
      var tdinst = document.createElement('td');
      var tdact = document.createElement('td');
      tdinst.textContent = ajaxdata.values[i].Name;
      tdact.textContent = ajaxdata.values[i].Act75;
      tr.appendChild(tdinst);
      tr.appendChild(tdact);
      tbody.appendChild(tr);
  }
}
$.ajax({
  url: '/api/scorecard'
})
.done(function(data) {
  ajaxdata = data;
putOnPage(ajaxdata.values);
});
