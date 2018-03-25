const mongoClient = require('mongodb').MongoClient;

const init = (connectionString) => {
    console.log(mongoClient);
    return mongoClient.connect(connectionString);
};

module.exports = { init };