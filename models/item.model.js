class Item {
    static isModelValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.text === 'string' &&
            model.text.length > 3;
    }

    get id() {
        return this._id;
    }
}

module.exports = Item;