// @ts-ignore
var app = module.exports = require('express')();
app.get('/hello', function (req, res) {
    res.json({ msg: "Hello World!" });
});
