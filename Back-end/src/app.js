import dotenv from 'dotenv'
dotenv.configDotenv({path: './src/environments/.env'});
import cors from 'cors'
import express from 'express'
import indexRoutes from './routes/IndexRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', indexRoutes);


export default app;


