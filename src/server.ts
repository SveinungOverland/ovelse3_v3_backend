import express from 'express';
import bodyParser from 'body-parser';



// Project imports
import routes from './routes';
import DB from './db';


const server = express();
server.use(bodyParser.json());


// @ts-ignore
const PORT = process.env.PORT || 5000;


// Initialize db
DB.init();


server.use('/', routes);


server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


