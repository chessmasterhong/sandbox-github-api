var REPO_NAME = 'impact-atmosphere';

var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

var contributor_data = [];

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_data[contributor_index] = {
        'name': contributors[contributor_index],
        'issues_opened': 0,
        'issues_assigned': 0
    }
}

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues?state=all&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var issue_index = 0; issue_index < data.length; issue_index++) {
    for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
        if(data[issue_index].user.login === contributor_data[contributor_index].name) {
            contributor_data[contributor_index].issues_opened++;
        }

        if(data[issue_index].assignee && data[issue_index].assignee.login === contributor_data[contributor_index].name) {
            contributor_data[contributor_index].issues_assigned++;
        }
    }
}

for(var c = 0; c < contributors.length; c++) {
    document.write(contributor_data[c].name + ': ' + contributor_data[c].issues_opened + ' opened total, ' + contributor_data[c].issues_assigned + ' assigned total<br>');
}
