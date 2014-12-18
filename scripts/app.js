var GITHUB_API_BASE_URL = 'https://api.github.com';

var REPO_OWNER = 'chessmasterhong';

var REPO_NAME = 'WaterEmblem';

var CLIENT = {
    ID: 'YOUR_GITHUB_API_CLIENT_ID',
    SECRET: 'YOUR_GITHUB_API_CLIENT_SECRET'
}

var app = angular.module('app', [
    'ui.router'
]);

app.config(function($stateProvider) {
    $stateProvider
        .state('comments', {
            url: '/comments'
            //templateUrl: ''
        })
        .state('commits', {
            url: '/commits'
            //templateUrl: ''
        })
        .state('contributors', {
            url: '/contributors'
            //templateUrl: ''
        })
        .state('issues', {
            url: '/issues'
            //templateUrl: ''
        })
        .state('pulls', {
            url: '/pulls'
            //templateUrl: ''
        })
        .state('repos', {
            url: '/repos'
            //templateUrl: ''
        })
        .state('lines', {
            url: '/lines'
            //templateUrl: ''
        });
});
