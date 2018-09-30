import express from 'express';




const router = module.exports = express.Router();



router.get("/", (req, res) => {
    res.json({
        msg: "Hello World"
    })
});


router.post('/create', (req, res) => {

});