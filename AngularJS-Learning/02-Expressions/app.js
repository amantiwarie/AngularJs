var app = angular.module("myApp", []);

app.controller("ExpressionController", function ($scope) {

    $scope.name = "Debashish";
    $scope.age = 24;

    $scope.student = {
        city: "Noida",
        college: "ABC College"
    };

    $scope.fruits = ["Apple", "Mango", "Banana"];

});