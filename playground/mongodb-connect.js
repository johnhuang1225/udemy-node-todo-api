// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Todos').insertOne({
        text: '家樂福購物',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // insert new doc into Users(name, age, location)
    db.collection('Users').insertOne({
        name: 'johnhuang',
        age: 45,
        location: 'Taipei'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
