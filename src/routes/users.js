import express from 'express';


// Project imports
import User from './models/users';



const router = module.exports = express.Router();



router.get("/", (req, res) => {
    res.json({
        msg: "Hello World"
    })
});


router.post('/create', (req, res) => {

});