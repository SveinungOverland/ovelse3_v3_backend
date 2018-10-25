// @flow

import bcrypt from 'bcrypt';

// BCrypt constants
const saltRounds = 10; // THIS SHOULD NEVER BE CHANGED

export default async function hashPassword(password: string) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds)
            .then(resolve)
            .catch(err => {
                console.log("Hashing failed");
                reject()
            });
    });
}