var app = angular.module("myApp", []);

app.controller("myController", function($scope){

    $scope.showMsg = false;

    $scope.toggle = function(){
        $scope.showMsg = !$scope.showMsg;
    };

});