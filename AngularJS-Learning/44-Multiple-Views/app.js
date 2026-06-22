var app =
angular.module(
"myApp",
["ngRoute"]
);

app.config(function($routeProvider){

$routeProvider

.when("/home",{

templateUrl:
"home.html"

})

.when("/students",{

templateUrl:
"students.html",

controller:
"studentController"

})

.when("/contact",{

templateUrl:
"contacts.html"

})

.otherwise({

redirectTo:
"/home"

});

});

app.controller(
"studentController",
function($scope){

$scope.students=[

"Rahul",
"Aman",
"Priya",
"Rohit"

];

});