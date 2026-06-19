var app = angular.module("myApp", []);

app.controller("myController", function($scope) {

    $scope.message = "";

    $scope.onFocus = function() {
        $scope.message = "Input box is focused";
    };

    $scope.onBlur = function() {
        $scope.message = "Input box lost focus";
    };

});