let config = require('./config');
let db = require('./db');
let data = require('./data');
let app = require('./app');

let async = () => {
    return Promise.resolve();
};

async().then(() => db.init(config.connectionString, config.dbName))
    .then((db) => data.init(db))
    .then((data) => app.init(data))
    .then((app) => {
        app.listen(config.port, () => console.log('Magic happends at: ' + config.port))
    });