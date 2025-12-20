import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser';
import indexRoutes from './routes/IndexRoutes.js';

const app = express();

app.set('trust proxy', 1);

app.use(cors({
    origin: process.env.CLIENT_SIDE_URL,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


app.use('/api', indexRoutes);

app.use((err, req, res, next) => {
    console.error('Global Erro: ', err);
    res.status(err.status || 500).json(
        {
            message: 'Internal Server Error!'
        }
    )
})

export default app;


