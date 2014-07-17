// Get total issues opened count and total issues assigned count by each contributor

'use strict';

var REPO_NAME = 'WaterEmblem';

var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

var contributor_issues = [];

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_issues[contributor_index] = {
        'name': contributors[contributor_index],
        'issues_opened': 0,
        'issues_assigned': 0
    };
}

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues?state=all&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var issue_index = 0; issue_index < data.length; issue_index++) {
    for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
        if(data[issue_index].user.login === contributor_issues[contributor_index].name) {
            contributor_issues[contributor_index].issues_opened++;
        }

        if(data[issue_index].assignee && data[issue_index].assignee.login === contributor_issues[contributor_index].name) {
            contributor_issues[contributor_index].issues_assigned++;
        }
    }
}

for(var c = 0; c < contributors.length; c++) {
    document.getElementById('output').innerHTML += contributor_issues[c].name + ': ' + contributor_issues[c].issues_opened + ' opened total, ' + contributor_issues[c].issues_assigned + ' assigned total<br>';
}

for(var repo_index = 0; repo_index < data.length; repo_index++) {
    document.getElementById('output').innerHTML += '<p><strong>Issue #' + data[repo_index].number + '</strong>: ' + data[repo_index].title + ' (opened by ' + data[repo_index].user.login + ')<br>' + data[repo_index].body + '</p>';
}
