var app = angular.module("myApp", []);

app.controller("myController", function($scope){

    $scope.cities = [
        "Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai"
    ];

});