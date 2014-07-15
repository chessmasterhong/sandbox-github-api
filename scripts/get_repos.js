var data = httpGet(GITHUB_API_BASE_URL + '/repos?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);
document.write(data);
