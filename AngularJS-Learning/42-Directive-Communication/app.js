var app = angular.module("myApp", []);

app.controller("myController", function($scope){

    $scope.message = "Hello from Controller";

});

app.directive("myDirective", function(){

    return {

        restrict: "E",

        scope: {
            text: "="
        },

        template: `
            <h3>Directive Area</h3>
            <p>{{ text }}</p>
        `
    };

});