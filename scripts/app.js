var REPO_OWNER = 'chessmasterhong';

var REPO_NAME = 'WaterEmblem';

var CLIENT = {
    ID: '',
    SECRET: ''
};

var app = angular.module('app', [
    'ui.router'
])
.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '',
            controller: 'homeController',
            templateUrl: 'partials/home.partial.html'
        })
        .state('comments', {
            url: '/comments'
            //controller: 'commentsController',
            //templateUrl: 'partials/comments.partial.html'
        })
        .state('commits', {
            url: '/commits'
            //controller: 'commitsController',
            //templateUrl: 'partials/commits.partial.html'
        })
        .state('contributors', {
            url: '/contributors'
            //controller: 'contributorsController',
            //templateUrl: 'partials/contributors.partial.html'
        })
        .state('issues', {
            url: '/issues'
            //controller: 'issuesController',
            //templateUrl: 'partials/issues.partial.html'
        })
        .state('pulls', {
            url: '/pulls'
            //controller: 'pullsController',
            //templateUrl: 'partials/pulls.partial.html'
        })
        .state('repos', {
            url: '/repos',
            controller: 'reposController',
            templateUrl: 'partials/repos.partial.html'
        })
        .state('lines', {
            url: '/lines'
            //controller: 'linesController',
            //templateUrl: 'partials/lines.partial.html'
        });
});
