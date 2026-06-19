
var app = angular.module('myApp', []);
app.controller("myController",function($scope){
 $scope.showMsg = false;

    $scope.toggleMessage = function() {
        $scope.showMsg = !$scope.showMsg;
    };

});