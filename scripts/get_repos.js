var data = httpGet(GITHUB_API_BASE_URL + '/' + USERNAME + '/repos?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);
document.write('<pre>' + data + '</pre>');
