require.config({
    baseUrl: "./external",
    paths: {
        "angular": "angular/angular",
        "angular-route" : "angular-route/angular-route",
        "jquery" : "jquery/jquery",
        "app" : "../app"
    },
    shim : {
        "angular" : {
            deps : ["jquery"],
            exports : 'angular'
        },
        "angular-route" : {
            deps : ["angular"]
        },
        "app" : {
            deps: ['angular'],
            exports : 'app'
        }
    }

});

require(["app"]);
