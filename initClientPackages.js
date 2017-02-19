(function() {

    console.log("initilizing client packages");

    var extractBowerComponents = require('./extractBowerComponents');
    var downloadWebDependency = require('./downloadWebDependecy');

    var requireUrl = "http://requirejs.org/docs/release/2.3.2/comments/require.js";

    var args = process.argv;

    var requirePath = process.env.npm_package_config_requireConfig || requireUrl;
    var externalScriptPath = __dirname + process.env.npm_package_config_clientExternalScriptsPath + '/require.js' ||
        __dirname + '/client/external/require.js' ;

    extractBowerComponents();
    downloadWebDependency(requirePath, externalScriptPath );

})();
