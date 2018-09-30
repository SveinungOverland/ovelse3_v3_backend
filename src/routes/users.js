import express from 'express';


// Project imports
import { newUser, checkPassword } from "../actions/users";

const router = module.exports = express.Router();



router.get("/", (req, res) => {
    res.json({
        msg: "Hello World"
    })
});


router.post('/create', (req, res) => { // req should be { username, password }
    console.log("Attempting to create new user: " + req.body.username);
    newUser(req.body)
        .then(result => {
            console.log("User created successfully");
            res.status(result.status).json(result);
        })
        .catch(err => {
            console.log("Woops: " + JSON.stringify(err));
            res.status(err.status).json(err);
        });
});


router.post('/login', (req, res) => { // req should be { username, password }
    console.log("Attempting login for user " + req.body.username);
    checkPassword(req.body)
        .then(result => {
            console.log("User login attempt was successful");
            res.status(result.status).json(result);
        })
        .catch(err => {
            console.log("Login attempt unsuccessful");
            res.status(err.status).json(err);
        });
});