(function() {
	let mongoClient = require('mongodb');
    let mongodb = null;

    function createConnection(url) {
        let mongoUrl = url || 'mongodb://localhost:27017/test';
        mongoClient.connect(mongoUrl,(err,db) => {
           if(err) {
               console.log(mongoUrl + ' db connection failed');
           }
           else {
               mongodb = db;
               mongodb.on('close',() => {
                   mongodb = null;
               });
           }
        });
    }

    function closeConnection() {
        if(mongodb) {
            mongodb.close();
        }
    }

    function find(collectionName, query, callback) {
        let collection = mongodb.collection(collectionName);
        collection.find(query).toArray(function(err, result) {
            if(!err) {
                callback(result);
            }
            else {
                console.log('no record found!');
            }
        });
    }

    function insert(collectionName,data, callback ) {
        let collection = mongodb.collection(collectionName);
        collection.insertMany(data,(err,result) => {
            if(!err) {
                callback(result);
            }
            else {
                console.log(err);
                throw err;
            }
        });
    }

     function update(collectionName,data, callback ) {
        let collection = mongodb.collection(collectionName);
        collection.updateOne(data,(err,result) => {
            if(!err) {
                callback(result);
            }
            else {
                console.log(err);
                throw err;
            }
        });
    }


    module.exports = {
        createConnection : createConnection,
        closeConnection : closeConnection,
        find : find,
        insert : insert,
        update : update
    };

})();
