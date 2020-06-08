/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333, () => {
  console.log('🚨️ Bug-end started! To de brinks ;D');
});
