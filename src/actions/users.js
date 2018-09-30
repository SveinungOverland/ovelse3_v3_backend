import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Project imports
import User from '../models/users';


// BCrypt constants
const saltRounds = 10; // THIS SHOULD NEVER BE CHANGED


export async function newUser(userObject) { // userObject of type Object { username: String, password: String } : returns Promise that resolves if user is created and rejects if username already exists
    return new Promise((resolve, reject) => {
        hashPassword(userObject.password)
            .then(hash => {
                saveNewUser(userObject.username, hash)
                    .then(resolve)
                    .catch(reject);
            })
            .catch(reject);
    });
}


export async function checkPassword(userObject) { // username of type String, password of type String : returns Promise
    return new Promise((resolve, reject) => {
        findUser(userObject.username)
            .then(user => {
                bcrypt.compare(userObject.password, user.password)
                    .then(res => {
                        if (res) resolve({status: 200, msg: "Login was successful", res: true });
                        else reject({status: 401, msg: "Wrong login credentials", res: false });
                    })
                    .catch(err => {
                        console.log("Error at checkPassword: " + err);
                        reject({status: 500, msg: "Something went wrong", res: err});
                    });
            })
            .catch(err => reject({status: 401, msg: "Wrong login credentials", res: false}));
    });
}



async function saveNewUser(username, hashedPassword) {
    return new Promise((resolve, reject) => {
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            username: username,
            password: hashedPassword
        });
        newUser.save()
            .then(result => {
                resolve({ status: 200, msg: "User successfully created", res: result });
            })
            .catch(err => {
                reject({ status: 409, msg: "Username is already used", res: err });
            });
    });
}


async function hashPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds)
            .then(resolve)
            .catch(err => {
                console.log(`Find user by username failed with error: ${ err }`);
                reject({ status: 500, msg: "Server couldn't properly check the password", res: err });
            })
    });
}

async function findUser(username) {
    return new Promise((resolve, reject) => {
        User.findOne({ username: username }).exec()
            .then(resolve)
            .catch(err => {
                console.log(`Hashing failed, for some reason: ${ err }`);
                reject({ status: 500, msg: "Wrong login credentials", res: err });
            });
    });
}
