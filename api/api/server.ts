import express from 'express';
import morgan from 'morgan';
import routes from './routes';

import './database/mysql';

require('dotenv-safe').config({
  allowEmptyValues: true,
});

const cors = require('cors');
const app = express();

const port = process.env.PORT || 3333;

app.use(morgan('combined'));

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor iniciado, porta ${port}... ☑`);
});
