class BaseData {
    constructor(db, ModelClass) {
        this.db = db;
        this.ModelClass = ModelClass;
        // this.collectionName = this._getCollectionName();
        // this.db.collection = this.collectionName;
        // this.collection = this.db.collection;
    }

    getAll() {
        const filter = {};
        const options = {};
        return this.collection.find(filter, options)
            .toArray();
    }

    create(model) {
        var dbo = this.db.db("items-db");
        dbo.createCollection("items")

        return dbo.collection("items").insert(model);
    }

    _getCollectionName() {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseData;