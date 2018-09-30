import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


// Project imports
import userRoutes from './routes/users';


const server = express();
server.use(bodyParser.json());


const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;
console.log(URI);
// Initialize db
mongoose.connect(URI, { useNewUrlParser: true })
    .catch(err => console.log(`Connection error: ${err}`))



server.use('/user', userRoutes);


server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


