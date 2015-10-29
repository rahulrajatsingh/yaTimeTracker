"use strict";

(function () {

    var MainController = function ($scope, AccountService, $location) {

        if (AccountService.IsAuthenticated() == false) {
            $location.path("/login");
        }

        $scope.message = "this is home page";
        
    }

    angular.module('yaTimeTracker').controller('MainController', ["$scope", "AccountService", "$location", MainController]);
}());