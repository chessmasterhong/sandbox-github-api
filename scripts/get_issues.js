var REPONAME = 'WaterEmblem';

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + USERNAME + '/' + REPONAME + '/issues?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var repo_index = 0; repo_index < data.length; repo_index++) {
    document.write('<p><strong>Issue #' + data[repo_index].number + '</strong>: ' + data[repo_index].title + '<br>' + data[repo_index].body + '</p>');
}
