// Get total issues opened count and total issues assigned count by each contributor

'use strict';

// The target repository
var REPO_NAME = 'WaterEmblem';

// Get repository contributor names from API
var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

// For each contributor, create an object as an element of an array with initial contributor issue data
var contributor_issues = [];
for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_issues[contributor_index] = {
        'name': contributors[contributor_index],
        'issues_opened': 0,
        'issues_assigned': 0
    };
}

// Get all issues from API
var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues?state=all&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

// For each issue ...
for(var issue_index = 0; issue_index < data.length; issue_index++) {
    for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
        // ... match opened issue username with contributor username and increment contributor's opened issue count by 1
        if(!data[issue_index].pull_request && data[issue_index].user.login === contributor_issues[contributor_index].name) {
            contributor_issues[contributor_index].issues_opened++;
        }

        // ... match issue assignee username with contributor username and increment contributor's assigned issue count by 1
        if(data[issue_index].assignee && data[issue_index].assignee.login === contributor_issues[contributor_index].name) {
            contributor_issues[contributor_index].issues_assigned++;
        }
    }
}

// For each contributor, output contributor's name along with their respective open issue count and and assigned issue count
for(var c = 0; c < contributors.length; c++) {
    document.getElementById('output').innerHTML += contributor_issues[c].name + ': ' + contributor_issues[c].issues_opened + ' opened total, ' + contributor_issues[c].issues_assigned + ' assigned total<br>';
}

// For each issue, output issue content
for(var repo_index = 0; repo_index < data.length; repo_index++) {
    document.getElementById('output').innerHTML += '<p><strong>Issue #' + data[repo_index].number + '</strong>: ' + data[repo_index].title + ' (opened by ' + data[repo_index].user.login + ')<br>' + data[repo_index].body + '</p>';
}
