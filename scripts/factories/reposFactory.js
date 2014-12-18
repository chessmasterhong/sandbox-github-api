app.factory('reposFactory', function($http) {
    'use strict';

    return {
        get: function() {
            return $http({
                method: 'GET',
                url: GITHUB_API_BASE_URL + '/users/' + REPO_OWNER + '/repos?client_id=' + CLIENT.ID + '&client_secret=' + CLIENT.SECRET,
                json: true
            });
        }
    };
});
