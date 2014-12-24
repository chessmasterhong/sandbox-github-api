app.controller('homeController', function($scope, githubAPIFactory, appService) {
    'use strict';

    $scope.foundRepo = false;

    $scope.user = '';
    $scope.repo = '';

    $scope.contributors = [];

    $scope.submitQuery = function() {
        githubAPIFactory.getUser($scope.user)
            .success(function(user) {
                githubAPIFactory.getRepos(user.login)
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
        githubAPIFactory.getContributors(appService.getUser(), appService.getRepo())
            .success(function(contributors) {
                for(var i = 0; i < contributors.length; i++) {
                    $scope.contributors.push({
                        name:                contributors[i].login,
                        commits:             0,
                        locAdded:            0,
                        locDeleted:          0,
                        issuesOpened:        0,
                        issuesAssigned:      0,
                        issuesClosed:        0,
                        issueComments:       0,
                        pullRequests:        0,
                        pullRequestComments: 0
                    });
                }

                updateCommits();
            });
    }

    function updateCommits() {
        githubAPIFactory.getCommits(appService.getUser(), appService.getRepo())
            .success(function(commits) {
                var index = -1;

                for(var i = 0; i < commits.length; i++) {
                    index = findContributorIndex(commits[i].author.login);

                    $scope.contributors[index].commits = commits[i].total;
                }
            });
    }

    // ===================
    //  Utility Functions
    // ===================
    function findContributorIndex(contributorName) {
        for(var i = 0; i < $scope.contributors.length; i++) {
            if($scope.contributors[i].name === contributorName) {
                return i;
            }
        }

        return -1;
    }
});
