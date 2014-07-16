var REPONAME = 'WaterEmblem';

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + USERNAME + '/' + REPONAME + '/comments?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var repo_index = 0; repo_index < data.length; repo_index++) {
    document.write('<p><strong>' + data[repo_index].user.login + '</strong>: ' + data[repo_index].body + '</p>');
}
