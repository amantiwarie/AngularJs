var app = angular.module('myApp', []);

app.controller("myController", function($scope) {

    $scope.name = "";

    $scope.showMessage = function() {
        $scope.message = "You typed: " + $scope.name;
    };

});