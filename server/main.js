(function() {
    var webServer = require('./webserver.js');
    var expressServer = require('./expressServer.js');

    webServer.run();
    expressServer.run();

})();

