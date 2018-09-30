import express from 'express';
import bodyParser from 'body-parser';



// Project imports
import routes from './routes';
import DB from './db';


const server = express();
server.use(bodyParser.json());


const PORT = process.env.PORT || 5000;


// Initialize db
DB();


server.use('/', routes);


server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


