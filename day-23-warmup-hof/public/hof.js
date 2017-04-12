var input = document.querySelector('#year-query');
var hoflist = document.querySelector('#hoflist');
input.addEventListener('keyup', function(ext) {

  if (evt.keyCode !== 13) {
    return;
  }

  var value = input.value;

  $.ajax({
    url: '/api/halloffame'
  })
  .done(function(data) {
    console.log('data?', data);

    for (var i = 0; i < data.stats.length; i++) {

      if (data.stats[i].year != value) {
        continue;
      }

      var hofli = document.createElement('li');
      hofli.textContent = data.stats[i].personID
      + ', year' + data.stats[i].year
      + ', votes' + data.stats[i].votes;
      hoflist.appendChild('hofli');
    }
  });
});
