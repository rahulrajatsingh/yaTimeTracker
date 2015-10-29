"use strict";

(function () {

    var AccountService = function ($http, $window, $location) {

        var register = function (registerModel) {
            return $http.post('http://localhost:53603/api/Account/Register', registerModel).success(function (response) {
                return response;
            });
        }

        var login = function (loginModel) {
            var data = "username=" + loginModel.username + "&password=" + loginModel.password + "&grant_type=" + loginModel.grant_type;

            return $http.post('http://localhost:53603/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
                var token = response.access_token;

                if (token && !data.error) {

                    var _userInfo = {
                        userName: loginModel.username,
                        _token: token
                    };

                    pushUserToSession(_userInfo);
                }
                return response;
            });
        }

        var logout = function () {
            removeUserFromSession();
            $location.path("/login");
        }

        var pushUserToSession = function (value) {

            $window.sessionStorage.setItem("userInfo", JSON.stringify(value));
        };

        var removeUserFromSession = function () {
            $window.sessionStorage.removeItem("userInfo", function(data){
                $location.path("/login");
            });
        };

        var isAuthenticated = function () {
            var _userInfo = getUserInfo();

            if (_userInfo) {
                return true;
            }
            return false;
        };

        var getUserInfo = function () {
            return JSON.parse($window.sessionStorage.getItem("userInfo"));
        };

        return {
            register: register,
            login: login,
            logout: logout,
            UserInfo: getUserInfo,
            IsAuthenticated: isAuthenticated,
            GetUserInfo: getUserInfo
        };
    }

    angular.module('yaTimeTracker').factory('AccountService', ["$http", "$window", "$location", AccountService]);

}());