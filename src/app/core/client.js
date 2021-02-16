const MongoClient = require('mongodb').MongoClient;

module.exports = new Promise((resolve, reject) => {
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
        if(err) reject(err);
        const connection = db.db("test-backend");
        resolve({connection, db});
      })
});