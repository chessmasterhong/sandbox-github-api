function httpGet(url, json_output) {
    if(typeof json_output === 'undefined') {
        json_output = true;
    }

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();

    return json_output === false ? xmlHttp.responseText : JSON.parse(xmlHttp.responseText);
}

function getContributors(repo_name, client_id, client_secret) {
    var contributors = [];

    var url = GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contributors'

    if(typeof client_id !== 'undefined' && typeof client_secret !== 'undefined') {
        url += '?client_id=' + client_id + '&client_secret=' + client_secret;
    }

    var data = httpGet(url);
    
    for(var contributor_index = 0; contributor_index < data.length; contributor_index++) {
        contributors.push(data[contributor_index].login);
    }

    return contributors;
}
