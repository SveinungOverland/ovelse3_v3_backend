import mongoose from 'mongoose';


export default class DB {

    constructor() {
        // @ts-ignore
        mongoose.connect(process.env.MONGODB_URI)
            .then(db => console.log("Connected to db", db))
            .catch(err => console.error(`Connection error: ${ err }`));

        this.initialized = true;
    }

     getConnection() {
        return mongoose.getConnection();
    }

}





