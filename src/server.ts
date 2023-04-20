import express from 'express';
import routes from '../src/routes/routes';
import errorRoutes from './routes/errorRoutes'
import path from 'path';

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes, errorRoutes);

app.listen(3333, () => console.log('Server is running !!'));
