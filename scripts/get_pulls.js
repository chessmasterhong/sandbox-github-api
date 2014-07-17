// Get total pull requests opened count by each contributor

'use strict';

var REPO_NAME = 'WaterEmblem';

var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

var contributor_pulls = [];

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_pulls[contributor_index] = 0;
}

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/pulls?state=all&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var pull_index = 0; pull_index < data.length; pull_index++) {
    var i = contributors.indexOf(data[pull_index].user.login);
    if(i >= 0) {
        contributor_pulls[i]++;
    }
}

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    document.getElementById('output').innerHTML += contributors[contributor_index] + ': ' + contributor_pulls[contributor_index] + '<br>';
}
