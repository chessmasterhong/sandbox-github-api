app.factory('githubAPIFactory', function($http) {
    'use strict';

    return {
        getUser: function(user, githubAPI) {
            return $http({
                method: 'GET',
                url: 'https://api.github.com/users/' + user + '?client_id=' + githubAPI.id + '&client_secret=' + githubAPI.secret,
                json: true
            });
        },

        getRepos: function(user, githubAPI) {
            return $http({
                method: 'GET',
                url: 'https://api.github.com/users/' + user + '/repos?client_id=' + githubAPI.id + '&client_secret=' + githubAPI.secret,
                json: true
            });
        }
    };
});
