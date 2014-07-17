var REPO_NAME = 'WaterEmblem';

var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

var contributor_data = [];

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_data[contributor_index] = {
        'name': contributors[contributor_index],
        'issue_count': 0
    }
}

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues?state=all&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var issue_index = 0; issue_index < data.length; issue_index++) {
    for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
        if(data[issue_index].user.login === contributor_data[contributor_index].name) {
            contributor_data[contributor_index].issue_count++;
            break;
        }
    }
}

for(var c = 0; c < contributors.length; c++) {
    document.write(contributor_data[c].name + ': ' + contributor_data[c].issue_count + '<br>');
}
