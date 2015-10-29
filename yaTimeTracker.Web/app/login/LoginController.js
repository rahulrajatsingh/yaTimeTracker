"use strict";

(function () {

    var LoginController = function ($scope, $location, AccountService) {

        $scope.registerRedirect = function () {
            $location.path("/register");
        }

        $scope.submitForm = function () {
            if ($scope.loginModel.username == "" || $scope.loginModel.password == "") {
                $scope.error = "All fields are mandatory";
                return false;
            }

            // all through
            $scope.error = "";

            AccountService.login($scope.loginModel)
            .success(function (data, status, headers, config) {
                if (!data.error) {
                    $location.path("\main");
                }
                else {
                    $scope.error = data.error_description;
                }
            })
            .error(function (data, status, headers, config) {
                $scope.error = "Failed to login";
            });
        }

        $scope.message = "Login";
        $scope.loginModel = {
            username: "",
            password: "",
            grant_type: "password"
        }
    }

    angular.module('yaTimeTracker').controller('LoginController', ["$scope", "$location", "AccountService", LoginController]);
}());