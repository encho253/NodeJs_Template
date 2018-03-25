const ItemsData = require('./items.data');

const init = (db) => {
    console.log(db);
    return Promise.resolve({
        items: new ItemsData(db)
    });
};

module.exports = { init };