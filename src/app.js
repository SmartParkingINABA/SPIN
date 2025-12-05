import dotenv from 'dotenv'
dotenv.configDotenv({path: './src/environments/.env'});
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser';
import indexRoutes from './routes/IndexRoutes.js';

const app = express();

app.use(cors({
    origin: process.env.CLIENT_SIDE_URL,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


app.use('/api', indexRoutes);


export default app;


