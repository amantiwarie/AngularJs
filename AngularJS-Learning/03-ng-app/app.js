var app = angular.module("myapp", []);

app.controller("myController", function($scope) {

    $scope.hospital = {
        name: "MY Hospital",
        Address: "Delhi",
        pincode: 470004
    };

});