// 23-ng-submit AngularJS example
var app = angular.module('myApp', []);

app.controller("myController", function($scope) {

    $scope.name = "";

    $scope.save = function() {
        $scope.message = "Form submitted! Hello " + $scope.name;
    };

});