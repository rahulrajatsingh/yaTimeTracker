"use strict";

(function () {

    var MainController = function ($scope, ItemService, AccountService, $location) {

        $scope.message = "this is home page";
        
    }

    angular.module('yaTimeTracker').controller('MainController', ["$scope", "AccountService", "$location", MainController]);
}());