import express from 'express';
import routes from './routes/routes';
import errorRoutes from './middleware/notFoundMiddleware';
import { limiterByIP } from './middleware/rateLimitByIP';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors({
    origin: ['*'],
    methods: ['GET', 'POST']
}));

app.use(limiterByIP)
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes, errorRoutes);

app.listen(process.env.PORT, () => console.log('Server is running !!'));

