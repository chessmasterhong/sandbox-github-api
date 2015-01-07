var app = angular.module('app', [
    'ui.router'
])
.constant('githubAPIKey', {
    'id'    : '6b27ef5c25efce7aa2fa',
    'secret': 'fd867c799c2366f56dadc25634390509d7abb97e'
})
.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '',
            controller: 'homeController',
            templateUrl: 'partials/home.partial.html'
        });
});
