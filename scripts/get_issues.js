var REPO_NAME = 'WaterEmblem';

var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

var contributor_data = [];

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_data[contributor_index] = {
        "name": contributors[contributor_index],
        "issue_count": 0
    }
}

var data = [];

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
     data.push(httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues?creator=' + contributors[contributor_index] + '&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET));
}

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_data[contributor_index].issue_count = data[contributor_index].length;
    document.write(contributor_data[contributor_index].name + ': ' + contributor_data[contributor_index].issue_count + '<br>');
}
