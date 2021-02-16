
const Model = (collection) => {

    const connect = require('./client');

    const find = (query) => {
        connect.then((db) => {
            db.collection(collection).find(query).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
            });
        });
    };

    const updateOne = (query, value) => {
        connect.then((db) => {
            db.collection(collection).updateOne(query, value).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
            });
        });
    };

    const deleteOne = (query) => {
        connect.then((db) => {
            db.collection(collection).find(query).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
            });
        });
    };

    const insertOne = (obj) => {
        return new Promise(resolve => {
            connect.then(({ connection, db }) => {
                connection.collection(collection).insertOne(obj, function (err, result) {
                    if (err) throw resolve(false);
                    console.log(result);
                    resolve(true);
                });
            });
        });
    };


    return {
        insertOne,
        find,
        deleteOne,
        updateOne
    }

}

module.exports = Model;