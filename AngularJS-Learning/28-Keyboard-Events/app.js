var app = angular.module("myApp", []);

app.controller("myController", function($scope) {

    $scope.keyDown = function() {
        $scope.result = "Key Down Event";
    };

    $scope.keyPress = function() {
        $scope.result = "Key Press Event";
    };

    $scope.keyUp = function() {
        $scope.result = "Key Up Event";
    };

});