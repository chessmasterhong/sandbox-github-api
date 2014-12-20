var app = angular.module('app', [
    'ui.router'
])
.constant('githubAPIKey', {
    'id'    : '',
    'secret': ''
})
.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '',
            controller: 'homeController',
            templateUrl: 'partials/home.partial.html'
        });
});
