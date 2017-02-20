define(
    ['angular'],
    function (angular) {
        var app = angular.module("webapp", ['ngRoute']);
        app.config(function ($routeProvider) {
            $routeProvider.when("/main", {
                templateUrl: 'main/main.html'
            });
        });
        return angular.bootstrap(app);
    });
