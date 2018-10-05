// @flow

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

require('dotenv').config();

// Project imports
import userRoutes from './routes/users';


const server = express();
server.use(bodyParser.json());


let text: number = 123;


const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

// Initialize db
mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log("Database connected"))
    .catch(err => console.log(`Connection error: ${err}`));


server.use('/user', userRoutes);


server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


