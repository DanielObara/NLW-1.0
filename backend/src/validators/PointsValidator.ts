import { celebrate, Segments, Joi } from 'celebrate';

export const storeValidator = celebrate(
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
    abortEarly: false,
  },
);
