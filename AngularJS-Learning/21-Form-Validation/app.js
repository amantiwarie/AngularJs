var app = angular.module("myApp", []);

app.controller("myController", function($scope){

    $scope.student = {};

    $scope.submitForm = function(){

        alert(
            "Name: " + $scope.student.name +
            "\nEmail: " + $scope.student.email +
            "\nCity: " + $scope.student.city
        );

    };

});