app.controller('homeController', function($scope, githubAPIFactory, appService) {
    'use strict';

    $scope.submitQuery = function() {
        githubAPIFactory.getUser($scope.user, CLIENT)
            .success(function(user) {
                githubAPIFactory.getRepos(user.login, CLIENT)
                    .success(function(repos) {
                        var foundRepo = false;

                        for(var i = 0; i < repos.length; i++) {
                            if(repos[i].name.toLowerCase() === $scope.repo.toLowerCase()) {
                                appService.setUser(user.login);
                                appService.setRepo(repos[i].name);
                                foundRepo = true;
                                break;
                            }
                        }

                        if(!foundRepo) {
                            console.log('Cannot find repository name.');
                        } else {
                            $scope.$emit('foundRepo', foundRepo);
                        }
                    });
            })
            .error(function() {
                console.log('Cannot find user name.');
            });
    };
});
