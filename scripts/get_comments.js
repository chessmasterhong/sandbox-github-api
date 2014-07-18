// Get total commit comment count, total issue comment count, and total pull request comment count made by each contributor

'use strict';

// The target repository
var REPO_NAME = 'WaterEmblem';

// Get repository contributor names from API
var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

// For each contributor, create an object as an element of an array with initial contributor comment data
var contributor_comments = [];
for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_comments[contributor_index] = {
        'name': contributors[contributor_index],
        'commit_comments': 0,
        'issue_comments': 0,
        'pull_comments': 0
    };
}

// Get repository commit comments from API
var data_commits = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/comments?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

// For each commit comment, match comment username with contributor name and increment contributor's commit comment count by 1
for(var comment_index = 0; comment_index < data_commits.length; comment_index++) {
    for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
        if(data_commits[comment_index].user.login === contributor_comments[contributor_index].name) {
            contributor_comments[contributor_index].commit_comments++;
        }
    }
}

// Get repository issues from API
var data_issues = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues?state=all&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

// For each issue, get the comments.
for(var issue_index = 0; issue_index < data_issues.length; issue_index++) {
    var issue_comments = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues/' + data_issues[issue_index].number + '/comments?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

    // For each issue comment, match comment username with contributor name
    for(var comment_index = 0; comment_index < issue_comments.length; comment_index++) {
        for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
            if(issue_comments[comment_index].user.login === contributor_comments[contributor_index].name) {
                // If issue is a pull request, increment contributor's pull request comment count by 1
                if(data_issues[issue_index].pull_request) {
                    contributor_comments[contributor_index].pull_comments++;
                // Otherwise, the issue is a regular issue; increment contributor's issue comment count by 1
                } else {
                    contributor_comments[contributor_index].issue_comments++;
                }
            }
        }
    }
}

// For each contributor, output contributor's name and their respective commit comments, issue comments, and pull request comments
for(var c = 0; c < contributors.length; c++) {
    document.getElementById('output').innerHTML += contributor_comments[c].name + ': ' + contributor_comments[c].commit_comments + ' commit comments, ' + contributor_comments[c].issue_comments + ' issue comments, '  + contributor_comments[c].pull_comments + ' pull request comments<br>';
}
