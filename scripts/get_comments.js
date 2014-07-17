var REPO_NAME = 'WaterEmblem';

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/comments?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var comment_index = 0; comment_index < data.length; comment_index++) {
    document.write('<p><strong>' + data[comment_index].user.login + '</strong>: ' + data[comment_index].body + '</p>');
}
