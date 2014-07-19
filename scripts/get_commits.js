// Get total commit count for each contributor

'use strict';

// Get repository contributors' statistics from API
var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/stats/contributors?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

// For each contributor, output username along with their respective total commits
for(var contributor_index = 0; contributor_index < data.length; contributor_index++) {
    document.getElementById('output').innerHTML += data[contributor_index].author.login + ': ' + data[contributor_index].total + '<br>';
}
