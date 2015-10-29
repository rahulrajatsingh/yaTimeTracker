"use strict";

(function () {

    var LoginController = function ($scope, $location, AccountService) {

        $scope.IsAuthenticated = function () {
            return AccountService.IsAuthenticated();
        }

        $scope.GetloggedInUserName = function () {
            var userModel = AccountService.GetUserInfo();
            if (userModel) {
                return userModel.userName;
            }
            return '';
        }

        $scope.signout = function () {
            AccountService.logout();            
        }
       
    }

    angular.module('yaTimeTracker').controller('NavigationController', ["$scope", "$location", "AccountService", LoginController]);
}());