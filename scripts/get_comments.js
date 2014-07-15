document.write('<pre>' + httpGet(GITHUB_API_BASE_URL + '/repos/' + USERNAME + '/WaterEmblem/comments?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET, false) + '</pre>');
