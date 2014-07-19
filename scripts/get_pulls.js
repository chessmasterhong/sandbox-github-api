// Get total pull requests opened count by each contributor

'use strict';

// Get repository contributor names from API
var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

// For each contributor, create an array element with initial contributor pull request count
var contributor_pulls = [];
for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_pulls[contributor_index] = 0;
}

// Get all (opened and closed) pull requests from API
var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/pulls?state=all&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

// For each pull request, match pull request username with contributor username and increment contributor's pull reuqest count by 1
for(var pull_index = 0; pull_index < data.length; pull_index++) {
    var i = contributors.indexOf(data[pull_index].user.login);
    if(i >= 0) {
        contributor_pulls[i]++;
    }
}

// For each contributor, output contributor's name along with their respective pull request count
for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    document.getElementById('output').innerHTML += contributors[contributor_index] + ': ' + contributor_pulls[contributor_index] + '<br>';
}
