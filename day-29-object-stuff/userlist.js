(function() {
  var userList = document.querySelector('#user-list');


  $.ajax({
    url: 'https://api.github.com/search/users?q=gallagher'
  })
  .done(function(data) {
    // userRepoLi = '';
    data.items.forEach(function(user) {
      // console.log(user);
        // userRepoLi = userLi
        var userLi = document.createElement('li');
        userLi.textContent = user.login;
        userLi.setAttribute('data-repos', user.repos_url);
        userList.appendChild(userLi);
    });

    userList.addEventListener('click', function(evtname) {
      if (evtname.target.tagName ==='LI') {
        var repos = evtname.target.getAttribute('data-repos');
        // alert(repos);
        GithubApp.loadThemRepos(repos);
      }
    })
  });
})();
