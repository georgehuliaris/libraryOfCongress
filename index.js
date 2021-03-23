var indexSearchInputEl = document.querySelector('#indexSearchInput');
var optionSelectedEl = document.querySelector('#optionSelected');
var searchButtonEl = document.querySelector('#searchButton');

// var repoContainerEl = document.querySelector('#repos-container');
// var repoSearchTerm = document.querySelector('#repo-search-term');

console.log(indexSearchInputEl);
console.log(optionSelectedEl);
console.log(searchButtonEl);


var buttonClickHandler = function (event) {
  event.preventDefault();

  var searchTerm = indexSearchInputEl.value.trim();
  console.log("We clicked the button!");

  if (searchTerm) {
    getReturnedResults(searchTerm);
  }

//     repoContainerEl.textContent = '';
//     searchButtonEl.value = '';
//   } else {
//     alert('Please enter a GitHub username');
//   }
};


var getReturnedResults = function (searchString) {
  var apiUrl = 'https://www.loc.gov/search/?q=' + searchString + '&fo=json';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.then(function (data) {
          //displayRepos(data, user);
          console.log("Is this working??" + data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to the Library of Congress');
    });
};

// var getFeaturedRepos = function (language) {
//   var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayRepos(data.items, language);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   });
// };

// var displayRepos = function (repos, searchTerm) {
//   if (repos.length === 0) {
//     repoContainerEl.textContent = 'No repositories found.';
//     return;
//   }

//   repoSearchTerm.textContent = searchTerm;

//   for (var i = 0; i < repos.length; i++) {
//     var repoName = repos[i].owner.login + '/' + repos[i].name;

//     var repoEl = document.createElement('a');
//     repoEl.classList = 'list-item flex-row justify-space-between align-center';
//     repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);

//     var titleEl = document.createElement('span');
//     titleEl.textContent = repoName;

//     repoEl.appendChild(titleEl);

//     var statusEl = document.createElement('span');
//     statusEl.classList = 'flex-row align-center';

//     if (repos[i].open_issues_count > 0) {
//       statusEl.innerHTML =
//         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
//     } else {
//       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
//     }

//     repoEl.appendChild(statusEl);

//     repoContainerEl.appendChild(repoEl);
//   }
// };

// indexSearchInputEl.addEventListener('submit', formSubmitHandler);
searchButtonEl.addEventListener('click', buttonClickHandler);
