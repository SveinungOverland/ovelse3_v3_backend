import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


// Project imports
import userRoutes from './routes/users';
import DB from './db';


const server = express();
server.use(bodyParser.json());


const PORT = process.env.PORT || 5000;


// Initialize db
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });



server.use('/user', userRoutes);


server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


