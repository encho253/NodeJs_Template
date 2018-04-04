class BaseData {
    constructor(db, ModelClass, validator) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.validator = validator;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    getAll() {
        const filter = {};
        const options = {};
        return this.collection.find(filter, options)
            .toArray();
    }

    create(model) {
        debugger;
        if (!this._isModelValid(model)) {
            return Promise.reject('Invalid model');
        }

        return this.collection.insert(model);
    }

    _isModelValid(model) {
        return this.validator.isModelValid(model);
    }

    _getCollectionName() {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseData;