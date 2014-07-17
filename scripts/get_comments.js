var REPO_NAME = 'WaterEmblem';

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/comments?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var repo_index = 0; repo_index < data.length; repo_index++) {
    document.write('<p><strong>' + data[repo_index].user.login + '</strong>: ' + data[repo_index].body + '</p>');
}
