var app = angular.module("srmsApp", ["ngRoute"]);

/* ==========================
   ROUTING
========================== */

app.config(function ($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "home.html"
        })

        .when("/addStudent", {
            templateUrl: "addStudent.html",
            controller: "StudentController"
        })

        .when("/students", {
            templateUrl: "students.html",
            controller: "StudentController"
        })

        .otherwise({
            redirectTo: "/"
        });

});


/* ==========================
   SERVICE
========================== */

app.factory("StudentService", function () {

    var students = [

        {
            id: 1,
            name: "Rahul",
            course: "Java"
        },

        {
            id: 2,
            name: "Priya",
            course: "Python"
        }

    ];

    return {

        students: students

    };

});


/* ==========================
   CONTROLLER
========================== */

app.controller("StudentController",
    function ($scope, StudentService, $location) {

        // Shared Student List

        $scope.students = StudentService.students;

        // Form Object

        $scope.student = {};

        // Add Student

        $scope.addStudent = function () {

            var newStudent = {

                id: $scope.students.length + 1,

                name: $scope.student.name,

                course: $scope.student.course
            };

            $scope.students.push(newStudent);

            alert("Student Added Successfully!");

            $scope.student = {};

            // Redirect to Student List

            $location.path("/students");
        };

    });