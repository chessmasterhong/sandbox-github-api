// Get repositories owned by user

'use strict';

// Get all user's public repositories from API
var data = httpGet(GITHUB_API_BASE_URL + '/users/' + REPO_OWNER + '/repos?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

// For each repository, output repository name
for(var repo_index = 0; repo_index < data.length; repo_index++) {
    document.getElementById('output').innerHTML += data[repo_index].name + '<br>';
}
