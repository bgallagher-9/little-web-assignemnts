var jqprom = $.ajax({
  url: 'https://api.github.com/search/users?q=gallagher'
});

var gituserList = document.querySelector('#gituser-list');

jqprom.done(function(data) {
  console.log('got it', data)


  for (var i = 0; i < data.items.length; i++) {
    console.log('each object', data.items[i])
    var gitli = document.createElement('li');
    var gith2 = document.createElement('h2');
    var gitdivhtml = document.createElement('a');
    var gitdivrepo = document.createElement('div');
    gith2.textContent = data.items[i].login;
    gitli.appendChild(gith2);

    gitdivhtml.textContent = 'HTML : ' + data.items[i].html_url;
    gitdivhtml.href = data.items[i].html_url;
    gitli.appendChild(gitdivhtml);

    gitdivrepo.textContent = 'Repo : ' + data.items[i].repos_url;
    gituserList.appendChild(gitli);


    gitli.appendChild(gitdivrepo);
  }
});
