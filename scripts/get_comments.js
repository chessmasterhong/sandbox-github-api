// Get total commit comments made by each contributor

var REPO_NAME = 'WaterEmblem';

var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

var contributor_comments = [];

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_comments[contributor_index] = {
        'name': contributors[contributor_index],
        'commit_comments': 0
    }
}

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/comments?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var comment_index = 0; comment_index < data.length; comment_index++) {
    for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
        if(data[comment_index].user.login === contributor_comments[contributor_index].name) {
            contributor_comments[contributor_index].commit_comments++;
        }
    }
}

for(var c = 0; c < contributors.length; c++) {
    document.write(contributor_comments[c].name + ': ' + contributor_comments[c].commit_comments + ' comments made on commits<br>');
}

for(var comment_index = 0; comment_index < data.length; comment_index++) {
    document.write('<p><strong>' + data[comment_index].user.login + '</strong>: ' + data[comment_index].body + '</p>');
}
