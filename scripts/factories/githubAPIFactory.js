app.factory('githubAPIFactory', function($http, githubAPIKey) {
    'use strict';

    return {
        getUser: function(user) {
            return $http({
                method: 'GET',
                url: 'https://api.github.com/users/' + user + '?client_id=' + githubAPIKey.id + '&client_secret=' + githubAPIKey.secret,
                json: true
            });
        },

        getRepos: function(user) {
            return $http({
                method: 'GET',
                url: 'https://api.github.com/users/' + user + '/repos?client_id=' + githubAPIKey.id + '&client_secret=' + githubAPIKey.secret,
                json: true
            });
        },

        getContributors: function(user, repo) {
            return $http({
                method: 'GET',
                url: 'https://api.github.com/repos/' + user + '/' + repo + '/contributors?client_id=' + githubAPIKey.id + '&client_secret=' + githubAPIKey.secret,
                json: true
            });
        }
    };
});
