//Install dependency

(function () {
    'use strict';
    var fs = require('fs');
    var _ = require('lodash');
    var ncp = require('ncp').ncp;

    ncp.limit = 4;

    function extractBowerComponents( isMin, externalPath ) {
        let bowerPackageJsonFile = __dirname + '/../bower.json';
        fs.readFile(bowerPackageJsonFile, (err, data) => {
            if (!err) {
                var bowerObj = JSON.parse(data);
                for (var propertyName in bowerObj.dependencies) {
                    copyClientDependency(propertyName, isMin, externalPath);
                }
            } else {
                console.log('can\'t access ' + bowerPackageJsonFile);
            }
        });
    }


    function copyClientDependency(name, isMin, clientExternalDepPath) {
        let bowerComponentPath = __dirname + '/../bower_components/' + name;
        let bowerComponentDist = bowerComponentPath + '/dist';

        fs.access(clientExternalDepPath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
            if (!err) {
                if (fs.existsSync(bowerComponentDist)) {
                    fs.readdir(bowerComponentDist, (err, files) => {
                        if (err) throw err;
                        ncp(bowerComponentDist, clientExternalDepPath + '/' + name, (err) => {
                            if (err) {
                                console.error(err);
                            }
                        });
                    });
                } else {
                    fs.readdir(bowerComponentPath, (err, files) => {
                        if (err) throw err;
                        var filesToCopy = _.filter(files, function (file) {
                            if (isMin) {
                                return ((file.indexOf(name) > -1) &&
                                    (file.indexOf('min') > -1));
                            }
                            return ((file.indexOf(name) > -1) && (file.indexOf('.min') === -1));
                        });
                        filesToCopy.forEach(function (file) {
                            var path = clientExternalDepPath + '/' + name;
                            if(!fs.existsSync(path)) {
                                fs.mkdirSync(path);
                            }
                            ncp(bowerComponentPath + '/' + file, path + '/' + file, (err) => {
                                if (err) {
                                    console.error(err);
                                }
                            });
                        });
                    });
                }
            } else {
                console.log('Create path ' + clientExternalDepPath);
            }
        });
    }

    module.exports = extractBowerComponents;

})();