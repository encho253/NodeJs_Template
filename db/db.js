let mongoClient = require('mongodb').MongoClient;

let init = (connectionString, databaseName) => {
    return mongoClient.connect(connectionString)
        .then((client) => {
            return client.db(databaseName)
        });
};

module.exports = { init };