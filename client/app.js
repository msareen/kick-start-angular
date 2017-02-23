define(
    ['angular',
    'angular-route'],
    function (angular) {

        var app = angular.module("webapp", ["ngRoute"]);

        app.config(function ($routeProvider, $locationProvider) {
            $routeProvider.when("/main", addRoute('main/main.html','main/main.controller.js','MainController'));

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });

        function addRoute(templateUrl,controllerPath, controllerName) {
            return {
                templateUrl : templateUrl,
                resolve : ['$rootScope','$q',function($rootScope,$q) {
                    require(controllerPath, function() {
                        var deffer = $q.deffer();
                        deffer.resolve();
                        $routescope.$apply();
                    })
                    return deffer.promise;
                }],
                controller : controllerName
            }
        }

        angular.element(document).ready(function () {
            angular.bootstrap(document, ['webapp']);
        });

        return app;

    });
