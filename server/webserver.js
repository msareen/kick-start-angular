(function () {

    function runWebServer() {
        var express = require('express');
        var path = require('path');

        var app = express();

        var staticPath = path.join(__dirname, '../client');
        console.log('hosting files at ' + staticPath);
        app.use('/', express.static(staticPath));

        app.listen(88, function () {
            console.log('Example app listening on port 88!');
        });
    }

    module.exports = {
        run : runWebServer
    }

})();
