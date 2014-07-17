var REPO_NAME = 'WaterEmblem';

var FILTER_USER = 'chessmasterhong';

var data = httpGet(GITHUB_API_BASE_URL + '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/commits?author=' + FILTER_USER + '&client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

document.write(FILTER_USER + ' has made ' + data.length + ' commits to ' + REPO_NAME);
