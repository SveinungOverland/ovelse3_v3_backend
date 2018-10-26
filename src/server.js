// @flow

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

require('dotenv').config();

// Project imports
import routes from './routes';


const server = express();
server.use(bodyParser.json());


const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

// Initialize db
mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log("Database connected"))
    .catch(err => console.log(`Connection error: ${err}`));


server.use('/', routes);


server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


export default server;