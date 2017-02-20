(function() {

    console.log("initilizing client packages");

    let extractBowerComponents = require('./extractBowerComponents');
    //let downloadWebDependency = require('./downloadWebDependecy');

    //let requireUrl = "http://requirejs.org/docs/release/2.3.2/comments/require.js";

    let isMin = process.argv.length > 2 ? process.argv[2] : false;

    let externalPath = __dirname + process.env.npm_package_config_clientExternalScriptsPath ;

    //let requirePath = process.env.npm_package_config_requireConfig || requireUrl;
    //let externalScriptPath = externalPath + '/require.js';

    extractBowerComponents(isMin, externalPath);
    //downloadWebDependency(requirePath, externalScriptPath );

})();
