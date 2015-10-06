"use strict";

(function () {

    var LoginController = function ($scope, $location, AccountService) {

        $scope.IsAuthenticated = AccountService.IsAuthenticated();
       
    }

    angular.module('yaTimeTracker').controller('NavigationController', ["$scope", "$location", "AccountService", LoginController]);
}());