var app = angular.module("myApp", []);

app.directive("studentCard", function(){

    return {

        template:

        "<div>" +

        "<h2>Name : Rahul</h2>" +

        "<h2>Age : 22</h2>" +

        "</div>"

    };

});