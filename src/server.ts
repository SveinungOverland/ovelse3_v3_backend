import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';


// Project imports
import * as userRoutes from './routes/users';


const server = express();
server.use(bodyParser.json());

// @ts-ignore
const PORT = process.env.PORT || 5000;
// @ts-ignore
const URI = process.env.MONGODB_URI;


// Initialize db
mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log("Database connected"))
    .catch(err => console.log(`Connection error: ${err}`));


server.use('/user', userRoutes);


server.listen(PORT, () => console.log(`Listening on ${ PORT }`));

