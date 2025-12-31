import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser';
import indexRoutes from './routes/IndexRoutes.js';
import path from 'path';

const app = express();

app.set('trust proxy', 1);

app.use(cors({
    origin: process.env.CLIENT_SIDE_URL,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


app.use('/api', indexRoutes);
app.use('/uploads', express.static(path.resolve('public/uploads')));

app.use((err, req, res, next) => {
    console.error('Global Error: ', err);
    res.status(err.status || 500).json(
        {
            message: 'Internal Server Error!'
        }
    )
})

export default app;


