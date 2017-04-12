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
        // console.log('got it', data)
        totalResults = data.total_count;
        pageCount = Math.ceil(totalResults / 30);
        for (var i = 0; i < data.items.length; i++) {
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
        if (page === 1) {
            prevButton.style.display = 'none';
            // nextButton.style.display = 'inline';
        } else {
            prevButton.style.display = 'inline';
        }
        if (page >= pageCount) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'inline';
        }
    });
}
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
