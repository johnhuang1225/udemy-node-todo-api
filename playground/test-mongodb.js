const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/test";

MongoClient.connect(url, function(err, db) {
    db.collection('datas').find().toArray().then((results) => {
        console.log(results);
    });
    db.close();
});
