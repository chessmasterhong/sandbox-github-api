var GITHUB_API_BASE_URL = 'https://api.github.com';

var REPO_OWNER = 'chessmasterhong';

var REPO_NAME = 'WaterEmblem';

var CLIENT = {
    ID: 'YOUR_GITHUB_API_CLIENT_ID',
    SECRET: 'YOUR_GITHUB_API_CLIENT_SECRET'
};

var app = angular.module('app', [
    'ui.router'
])
.config(function($stateProvider) {
    $stateProvider
        .state('comments', {
            url: '/comments'
            //controller: 'comments',
            //templateUrl: 'partials/comments.partial.html'
        })
        .state('commits', {
            url: '/commits'
            //controller: 'commits',
            //templateUrl: 'partials/commits.partial.html'
        })
        .state('contributors', {
            url: '/contributors'
            //controller: 'contributors',
            //templateUrl: 'partials/contributors.partial.html'
        })
        .state('issues', {
            url: '/issues'
            //controller: 'issues',
            //templateUrl: 'partials/issues.partial.html'
        })
        .state('pulls', {
            url: '/pulls'
            //controller: 'pulls',
            //templateUrl: 'partials/pulls.partial.html'
        })
        .state('repos', {
            url: '/repos',
            controller: 'reposController',
            templateUrl: 'partials/repos.partial.html'
        })
        .state('lines', {
            url: '/lines'
            //controller: 'lines',
            //templateUrl: 'partials/lines.partial.html'
        });
});
