var REPO_NAME = 'WaterEmblem';

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contributors?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var contributor_index = 0; contributor_index < data.length; contributor_index++) {
    document.write(data[contributor_index].login + '<br>');
}
