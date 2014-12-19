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
        });
});
