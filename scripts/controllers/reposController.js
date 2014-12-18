app.controller('reposController', function($scope, githubAPIFactory) {
    'use strict';

    $scope.repos = [];

    githubAPIFactory.getRepos(REPO_OWNER, CLIENT)
        .success(function(response) {
            console.log(response)
            $scope.repos = response;
        });
});
