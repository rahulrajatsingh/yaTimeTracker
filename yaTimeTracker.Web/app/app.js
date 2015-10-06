'use strict';

(function () {
    // Declare app level module which depends on views, and components
    angular.module('yaTimeTracker', [
      'ngRoute',
    ]).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when("/main", {
                    templateUrl: "app/main/main.html",
                    controller: "MainController"
                })
                .when("/login", {
                    templateUrl: "app/login/login.html",
                    controller: "LoginController"
                })               
                .when("/register", {
                    templateUrl: "app/register/register.html",
                    controller: "RegisterController"
                })
            .otherwise({ redirectTo: "/main" });
        }])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('AuthenticationInterceptorService');
    }]);
}());