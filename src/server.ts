import express from 'express';
import routes from '../src/routes/routes';
import errorRoutes from './routes/errorRoutes';
import cors from 'cors';
import path from 'path';
import { limiterByIP } from './middleware/limiterByIP';

const app = express();

app.use(cors({
    origin: ['https://example.com'],
    methods: ['GET', 'POST']
}));


app.use(limiterByIP)
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes, errorRoutes);

app.listen(3333, () => console.log('Server is running !!'));
