var app = angular.module("myApp", []);

app.run(function($rootScope) {
    $rootScope.message = "Hello from AngularJS!";
});


/*          OR
var app = angular.module("myApp", []);

  app.controller("MyController", function($scope) {
      $scope.message = "Hello from Scope";
  });
*/