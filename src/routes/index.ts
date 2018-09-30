// @ts-ignore
const app = module.exports = require('express')();



app.get('/hello', (req, res) => {
    res.json({ msg: "Hello World!" })
});