// @flow

import mongoose from 'mongoose';

// Project imports
import User from '../models/users';
import hashPassword from '../crypto/hashPassword';
import compare from '../crypto/compare';




type UserObject = {
    username: string,
    password: string
}


export async function newUser(userObject: UserObject) { // userObject of type Object { username: String, password: String } : returns Promise that resolves if user is created and rejects if username already exists
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


export async function checkPassword(userObject: UserObject) { // username of type String, password of type String : returns Promise
    return new Promise((resolve, reject) => {
        findUser(userObject.username)
            .then(user => {
                compare(userObject.password, user.password)
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



async function saveNewUser(username: string, hashedPassword: string) {
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

async function findUser(username: string) {
    return new Promise((resolve, reject) => {
        User.findOne({ username: username }).exec()
            .then(resolve)
            .catch(err => {
                console.log(`Hashing failed, for some reason: ${ err }`);
                reject({ status: 500, msg: "Wrong login credentials", res: err });
            });
    });
}
