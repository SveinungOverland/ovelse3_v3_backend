import express from 'express';


import userRoutes from './users';

const combiner = express.Router();
combiner.use('/user', userRoutes);

export default combiner;