import mongoose from 'mongoose';




export default class DB {

    static initialized = false;

    static init() {
        // @ts-ignore
        mongoose.connect(process.env.MONGODB_URI)
            .then(db => console.log("Connected to db", db))
            .catch(err => console.error(`Connection error: ${ err }`));

        this.initialized = true;
    }

    static getConnection(): object {
        if (this.initialized) {
            const connection = mongoose.getConnection();

            console.log(typeof connection);

            return connection;
        } else return null
    }

}





