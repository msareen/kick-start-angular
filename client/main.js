require.config({
    baseUrl: "./external",
    paths: {
        "angular": "angular/angular",
        "angular-route" : "angular-route/angular-route",
        "jquery" : "jquery/jquery",
        "domready": "domready/ready",
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
    },
    deps : ["./app"]
});


