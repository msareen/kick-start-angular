define(
    ['angular',
    'angular-route'],
    function (angular) {

        var app = angular.module("webapp", ["ngRoute"]);



        app.config(function ($routeProvider, $locationProvider) {
            $routeProvider.when("/main", {
                templateUrl: '/main/main.html'
            });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });

        app.controller('testController', function ($scope) {

        });

        angular.element(document).ready(function () {
            angular.bootstrap(document, ['webapp']);
        });





        return app;

    });
