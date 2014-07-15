var data = httpGet('https://api.github.com/users/chessmasterhong/repos?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET);
document.write(data);
