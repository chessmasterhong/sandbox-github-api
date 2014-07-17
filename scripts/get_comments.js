// Get total commit comment count, total issue comment count, and total pull request comment count made by each contributor

var REPO_NAME = 'WaterEmblem';

var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

var contributor_comments = [];

for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_comments[contributor_index] = {
        'name': contributors[contributor_index],
        'commit_comments': 0,
        'issue_comments': 0,
        'pull_comments': 0
    }
}

var data_commits = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/comments?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var comment_index = 0; comment_index < data_commits.length; comment_index++) {
    for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
        if(data_commits[comment_index].user.login === contributor_comments[contributor_index].name) {
            contributor_comments[contributor_index].commit_comments++;
        }
    }
}

var data_issues = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues?state=all&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var issue_index = 0; issue_index < data_issues.length; issue_index++) {
    var issue_comments = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues/' + data_issues[issue_index].number + '/comments?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

    for(var comment_index = 0; comment_index < issue_comments.length; comment_index++) {
        for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
            if(issue_comments[comment_index].user.login === contributor_comments[contributor_index].name) {
                if(data_issues[issue_index].pull_request) {
                    contributor_comments[contributor_index].pull_comments++;
                } else {
                    contributor_comments[contributor_index].issue_comments++;
                }
            }
        }
    }
}

for(var c = 0; c < contributors.length; c++) {
    document.write(contributor_comments[c].name + ': ' + contributor_comments[c].commit_comments + ' comments commits, ' + contributor_comments[c].issue_comments + ' issue comments, '  + contributor_comments[c].pull_comments + ' pull request comments<br>');
}
