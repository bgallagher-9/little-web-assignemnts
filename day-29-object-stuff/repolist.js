(function() {
  var repoList = document.querySelector('#repo-list');

  function loadThemRepos(url) {

    repoList.innerHTML = '';
    // console.log('calling this url', url);
    $.ajax({
        url: url
      })
      .done(function(data) {

        if (data.length === 0) {
          alert('no repos');
        } else {
          data.forEach(function(repo) {
            var repoLi = document.createElement('li');
            repoLi.textContent = repo.name;
            repoList.appendChild(repoLi);
          });
        }
      });

  }
  GithubApp.loadThemRepos = loadThemRepos;
})();

// console.log(GithubApp);
