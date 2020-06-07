import express from "express";
import { celebrate, Segments, Joi } from "celebrate";

import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router();
const upload = multer(multerConfig);

routes.get("/items", itemsController.index);

routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        items: Joi.string().required(),
      }),
    },
    {
      // Faz a validações de todos os fields
      abortEarly: false,
    }
  ),
  pointsController.create
);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.delete("/points/:id", pointsController.delete);

export default routes;
