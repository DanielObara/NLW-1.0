import express from 'express';
import multer from 'multer';
import { storeValidator } from './validators/PointsValidator';

import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/items', itemsController.index);

routes.post(
  '/points',
  upload.single('image'),
  storeValidator,
  pointsController.create,
);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.delete('/points/:id', pointsController.delete);

export default routes;
