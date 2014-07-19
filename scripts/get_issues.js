// Get total issues opened count, closed issue count, and total issues assigned count by each contributor

'use strict';

// Get repository contributor names from API
var contributors = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);

// For each contributor, create an object as an element of an array with initial contributor issue data
var contributor_issues = [];
for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
    contributor_issues[contributor_index] = {
        'name': contributors[contributor_index],
        'issues_opened': 0,
        'issues_closed': 0,
        'issues_assigned': 0
    };
}

// Get all issues from API
var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues?state=all&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

// For each issue ...
for(var issue_index = 0; issue_index < data.length; issue_index++) {
    // .. check that issue is not an issue created from a pull request ...
    if(!data[issue_index].pull_request) {
        for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
            // ... match opened issue username with contributor username and increment contributor's opened issue count by 1 ...
            if(data[issue_index].user.login === contributor_issues[contributor_index].name) {
                contributor_issues[contributor_index].issues_opened++;
            }

            // ... match issue assignee username with contributor username and increment contributor's assigned issue count by 1 ...
            if(data[issue_index].assignee && data[issue_index].assignee.login === contributor_issues[contributor_index].name) {
                contributor_issues[contributor_index].issues_assigned++;
            }
        }

        // .. get all events for the issue ...
        var data_events = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/issues/' + (data[issue_index].number - 1) + '/events?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

        // .. check event records in reverse (since events are listed in increasing date order, we want to get the latest one first and backtrack from there); for each issue event ...
        for(var event_index = data_events.length - 1; event_index >= 0; event_index--) {
            // ... if issue event is a 'closed' issue event, someone must have closed it, so ...
            if(data_events[event_index].event === 'closed') {
                for(var contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
                    // ... match closed issue username with contributor username and increment contributor's closed issue count by 1 ...
                    if(data_events[event_index].actor.login === contributor_issues[contributor_index].name) {
                        contributor_issues[contributor_index].issues_closed++;

                        // Break out of loop (since we have found the contributor name match, there's no need to go through the rest of them for the same issue)
                        break;
                    }
                }
            }
        }
    }
}

// For each contributor, output contributor's name along with their respective open issue count, closed issue count, and and assigned issue count
for(var c = 0; c < contributors.length; c++) {
    document.getElementById('output').innerHTML += contributor_issues[c].name + ': ' + contributor_issues[c].issues_opened + ' opened total, ' + contributor_issues[c].issues_closed + ' closed total, ' + contributor_issues[c].issues_assigned + ' assigned total<br>';
}

// For each issue, output issue content
for(var issue_index = 0; issue_index < data.length; issue_index++) {
    if(!data[issue_index].pull_request) {
        document.getElementById('output').innerHTML += '<p><strong>Issue #' + data[issue_index].number + '</strong>: ' + data[issue_index].title + ' (opened by ' + data[issue_index].user.login + ')<br>' + data[issue_index].body + '</p>';
    }
}
