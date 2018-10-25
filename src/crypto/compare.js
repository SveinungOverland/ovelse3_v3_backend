
import bcrypt from 'bcrypt';


export default async function compare(data, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(data, hash)
            .then(resolve)
            .catch(reject)
    });
}