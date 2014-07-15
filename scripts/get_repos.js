var data = httpGet(GITHUB_API_BASE_URL + '/' + USERNAME + '/repos?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);

for(var repo_index = 0; repo_index < data.length; repo_index++) {
    document.write(data[repo_index].name + '<br>');
}
