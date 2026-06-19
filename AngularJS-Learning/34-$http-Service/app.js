var app = angular.module("myApp", []);

app.controller("myController",
function($scope, $http){

    $http.get(
        "https://jsonplaceholder.typicode.com/posts/1"
    )
    .then(function(response){

        $scope.message =
            response.data.title;

    });

});