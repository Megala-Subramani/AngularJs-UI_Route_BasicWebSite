/// <reference path="angular-min.js" />
/// <reference path="angular-ui-router-min.js" />


myApp = angular.module("myModule" , ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "templates/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .state("courses", {
                url: "/courses",
                templateUrl: "templates/courses.html",
                controller: "coursesController",
                controllerAs: "coursesCtrl",
                data: {
                    data_1: "Megala1",
                    data_n: "MegalaN",
                    data_n_1:"MegalaN-1"
                }
            })
            .state("students", {
                url: "/students",
                templateUrl: "templates/students.html",
                controller: "studentsControler",
                controllerAs: "studentsCtrl"
            })
        $locationProvider.html5Mode(true);
    })
    .controller("homeController", function ($scope, $rootScope) {
        $scope.Header = "I am From Home Controller";
        $rootScope.text = "I am from HomeController to CoursesController";
    })
    .controller("coursesController", function ($scope,$state) {
        $state.current.data.data_1 = "New Data";
        $scope.TXT = $state.current.data.data_1;
        $scope.TTT = $state.current.data.data_n;
    })
    .controller("studentsControler", function () {
        this.name="MEGALA"
    })