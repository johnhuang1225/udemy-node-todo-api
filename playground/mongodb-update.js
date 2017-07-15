// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // update Todos
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5969588b5c2258a10ee527c7")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // update Users age
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("59694d765c2258a10ee526f8")
    }, {
        $set: {
            name: 'fiona'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    db.close();
});
