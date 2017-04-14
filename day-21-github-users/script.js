var gituserList = document.querySelector('#gituser-list');
var query = document.querySelector('#search-query');
var nextButton = document.querySelector('#page-button');
var prevButton = document.querySelector('#prev-button');

var page = 1;
var totalResults;
var pageCount;

function makeAjaxCall() {
    gituserList.innerHTML = '';
    var jqprom = $.ajax({
        url: 'https://api.github.com/search/users?q=' + query.value + '&page' + page
    });
    jqprom.done(function(data) {
        totalResults = data.total_count;
        pageCount = Math.ceil(totalResults / 30);
        for (var i = 0; i < data.items.length; i++) {
            var gitli = document.createElement('li');
            var gith2 = document.createElement('a');
            // var gitdivhtml = document.createElement('a');
            var gitdivrepo = document.createElement('a');
            gith2.textContent = data.items[i].login;
            // gitdivhtml.textContent = 'HTML : ' + data.items[i].html_url;
            gith2.href = data.items[i].html_url;
            gith2.target = '_blank';
            gitdivrepo.textContent = 'Repo : ' + data.items[i].repos_url;
            gitdivrepo.href = data.items[i].repos_url;
            // gitdivrepo.target = '_blank';
            gituserList.appendChild(gitli);
            gitli.appendChild(gith2);
            // gitli.appendChild(gitdivhtml);
            gitli.appendChild(gitdivrepo);
        }
        if (page === 1) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'inline';
        }
        if (page >= pageCount) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'inline';
        }
    })
};
query.addEventListener('keyup', function(evt) {
    if (evt.keyCode !== 13) {
        return;
    }
    makeAjaxCall();
});
nextButton.addEventListener('click', function() {
    page += 1;
    makeAjaxCall();
});
prevButton.addEventListener('click', function() {
    page -= 1;
    makeAjaxCall();
});
