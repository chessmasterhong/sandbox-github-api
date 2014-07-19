// Get total line addition and total line deletion count by each contributor

'use strict';

// Get repository contributors' statistics from API
var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/stats/contributors?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

// For each contributor ...
var lines_added = 0;
var lines_deleted = 0;
for(var contributor_index = 0; contributor_index < data.length; contributor_index++) {
    // ... for each week, accumulate lines added and lines deleted, then ...
    for(var week_index = 0; week_index < data[contributor_index].weeks.length; week_index++) {
        lines_added += data[contributor_index].weeks[week_index].a;
        lines_deleted += data[contributor_index].weeks[week_index].d;
    }

    // ... output contributor's username along with their respective total line addition and total line deletion
    document.getElementById('output').innerHTML += data[contributor_index].author.login + ': ' + lines_added + ' lines added total, ' + lines_deleted + ' lines deleted total<br>';
}
