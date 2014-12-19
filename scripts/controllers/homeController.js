app.controller('homeController', function($scope, githubAPIFactory, appService) {
    'use strict';

    $scope.submitQuery = function() {
        var user = $scope.user,
            repo = $scope.repo;

        githubAPIFactory.getUser(user, CLIENT)
            .success(function() {
                githubAPIFactory.getRepos(user, CLIENT)
                    .success(function(repos) {
                        var foundRepo = false;

                        for(var i = 0; i < repos.length; i++) {
                            if(repos.name === repo) {
                                appService.setUser($scope.user);
                                appService.setRepo($scope.repo);
                                foundRepo = true;
                                break;
                            }
                        }

                        if(!foundRepo) {
                            console.log('Cannot find repository name.');
                        }
                    });
            })
            .error(function() {
                console.log('Cannot find user name.');
            });
    };
});
