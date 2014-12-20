app.controller('homeController', function($scope, githubAPIFactory, appService) {
    'use strict';

    $scope.foundRepo = false;

    $scope.user = '';
    $scope.repo = '';

    $scope.submitQuery = function() {
        githubAPIFactory.getUser($scope.user, CLIENT)
            .success(function(user) {
                githubAPIFactory.getRepos(user.login, CLIENT)
                    .success(function(repos) {

                        for(var i = 0; i < repos.length; i++) {
                            if(repos[i].name.toLowerCase() === $scope.repo.toLowerCase()) {
                                appService.setUser(user.login);
                                appService.setRepo(repos[i].name);

                                $scope.user = user.login;
                                $scope.repo = repos[i].name;

                                $scope.foundRepo = true;
                                generateReport();
                                break;
                            }
                        }

                        if($scope.foundRepo === false) {
                            console.log('Cannot find repository name.');
                        }
                    });
            })
            .error(function() {
                console.log('Cannot find user name.');
            });
    };

    function generateReport() {
        $scope.contributors = [];

        githubAPIFactory.getContributors(appService.getUser(), appService.getRepo(), CLIENT)
            .success(function(contributors) {
                $scope.contributors = contributors;
            });
    }
});
