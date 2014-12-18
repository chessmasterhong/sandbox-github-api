app.controller('reposController', function($scope, reposFactory) {
    'use strict';

    $scope.repos = [];

    reposFactory.get(REPO_OWNER, CLIENT)
        .success(function(response) {
            console.log(response)
            $scope.repos = response;
        });
});
