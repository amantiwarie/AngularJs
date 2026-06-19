var app = angular.module("myApp", []);

app.service("messageService", function(){

    this.getMessage = function(name){
        return "Welcome " + name;
    };

});

app.controller("myController", function($scope, messageService){

    $scope.name = "";

    $scope.showMessage = function(){

        $scope.result =
        messageService.getMessage($scope.name);

    };

});