let attachTo = (app, data) => {
    app.get('/items', (req, res) => {
        return data.items.getAll()
            .then((items) => {
                return res.render('items/all', {
                    context: items
                });
            });
    });

    app.get('/items/form', (req, res) => {
        return res.render('items/form');
    });

    app.post('/items', (req, res) => {
        let item = req.body;
        return data.items.create(item)
            .then((dbItem) => {
                return res.redirect('/items/' + dbItem._id)
            })
            .catch((err) => {
                return res.redirect('/items/form')
            })
    });
};

module.exports = { attachTo };