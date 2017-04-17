var gituserList = document.querySelector('#gituser-list');
var query = document.querySelector('#search-query');
var nextButton = document.querySelector('#page-button');
var prevButton = document.querySelector('#prev-button');
var int = document.querySelector('.integer');
var template = document.querySelector('#row-template').innerHTML;

var page = 1;
var totalResults;
var pageCount;
var startNum = 1;

function makeAjaxCall() {
  gituserList.innerHTML = '';
  var jqprom = $.ajax({
    url: 'https://api.github.com/search/users?q=' + query.value + '&page=' + page
  });
  jqprom.done(function(data) {
      totalResults = data.total_count;
      pageCount = Math.ceil(totalResults / 30);

      var html = '';
      for (var i = 0; i < data.items.length; i++) {
        html += Mustache.render(template, {
          login: data.items[i].login,
          repos_url: data.items[i].repos_url});
      };
      gituserList.innerHTML = html;
      // for (var i = 0; i < data.items.length; i++) {
      //
      //     var gitli = document.createElement('li');
      //     gituserList.appendChild(gitli);
      //
      //     var gith2 = document.createElement('a');
      //     gith2.textContent = data.items[i].login;
      //     gith2.href = data.items[i].html_url;
      //     gith2.target = '_blank';
      //     gitli.appendChild(gith2);
      //
      //     var gitdivrepo = document.createElement('a');
      //     gitdivrepo.textContent = 'Repo : ' + data.items[i].repos_url;
      //     gitdivrepo.href = data.items[i].repos_url;
      //     gitli.appendChild(gitdivrepo);
    // }

    if (page !== 1) {
      prevButton.style.display = 'inline';
      int.style.display = 'inline-block';
      prevButton.style.color = 'red';
    } else if (page === 1) {
      prevButton.style.color = 'lightgrey';

    }
    if (page >= pageCount) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'inline';
    }
  });
};
query.addEventListener('keyup', function(evt) {
  if (evt.keyCode !== 13) {
    return;
  }
  makeAjaxCall();
  // prevButton.callList.remove('#prev-button');
});
nextButton.addEventListener('click', function() {
  startNum++;
  int.textContent = startNum;
  page += 1;
  makeAjaxCall();
});
prevButton.addEventListener('click', function() {
  if (startNum <= 1) {
    startNum--;
    int.textContent = 1;
    // prevButton.classList.add('greyprev');
  } else if (startNum > 1) {
    startNum--;
    int.textContent = startNum;
    // prevButton.classList.remove('greyprev');
  }
  page -= 1;
  makeAjaxCall();
});
