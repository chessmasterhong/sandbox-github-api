app.controller('contributorsController', function($scope, githubAPIFactory, appService) {
    'use strict';

    $scope.contributors = 'None';

    $scope.$on('foundRepo', function(event, data) {
        $scope.contributors = appService.getUser();
    });
});
