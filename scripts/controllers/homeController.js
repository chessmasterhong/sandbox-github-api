app.controller('homeController', function($scope) {
    'use strict';

    $scope.user = '';
    $scope.repo = '';

    $scope.submitQuery = function() {
        console.log($scope.user)
    };
});
