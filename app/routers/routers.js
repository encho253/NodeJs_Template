let fs = require('fs');
let path = require('path');

let attachTo = (app, data) => {
    app.get('/', (req, res) => {
        return res.render('home');
    });

    fs.readdirSync(__dirname)
        .filter((file) => file.includes('.router'))
        .forEach((file) => {
            let modulePath = path.join(__dirname, file);
            require(modulePath).attachTo(app, data);
        })
};

module.exports = { attachTo }