import Joi from 'joi';
import { enumState } from '../../utils/enumState';

export = async (req, res, next) => {
  try {
    const entitie = Joi.object({
      city: Joi.string().min(4).max(30).required(),
      state: Joi.string()
        .uppercase()
        .valid(...enumState)
        .required()
    });

    const { error } = await entitie.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
